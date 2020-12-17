import { parentDirectories } from './../../../node_modules/gm_node/index.js'
import { Directory, File } from '@/types/FileSystem'
import { Getters } from '@/types/store'
import { Commit, Dispatch, ActionTree } from 'vuex'
import api from '../../api'
import Vue from 'vue'

export interface State {
    files: (File | Directory)[];
}

function searchDirectory(files: (File | Directory)[], dir: string) {
    const parents = parentDirectories(dir)
    let stack = [...files]
    while (stack.length) {
        const el = stack.pop()
        if (el?.name === dir) {
            return el
        }
        if (~parents.indexOf(el)) {
            if (el.files) {
                stack = el.files
            } else {
                return null
            }
        }
    }
}

function formatFile(file) {
    return {
        name: file.path,
        info: { ...file }                        
    }    
}

export default {
    state: {
        files: []
    } as State,
    mutations: {
		SET_FILES: (state: State, files: (File | Directory)[]) => {
            state.files = files
        },
        SET_CHILDREN: (state: State, { dir, files }: { dir: string; files: (File | Directory)[] }) => {
            const dirEl = searchDirectory(state.files, dir)
            if (dirEl) {                
                Vue.set(dirEl, 'files', files)
            }
        },
    },
    actions: {
        async getFiles({ commit, getters }: { commit: Commit; getters: Getters }, dir: string) {
            try {
                const res = await api.get('/fileSystem?path=' + dir)     
                const rootIsParent = ~parentDirectories(dir).indexOf(getters.root)
                if (rootIsParent) {
                    commit('SET_CHILDREN', { dir, files: res.data.map(formatFile) })                     
                } else { 
                    commit('SET_FILES', res.data.map(formatFile))                     
                }
            } catch (e) {
                throw new Error('Files failed: ' + e)
            }
        },        
        async openFile({ commit, getters }: { commit: Commit; getters: Getters}, filename: string) {
            try {
                const res = await api.get('/fileSystem/open?path=' + filename)
                if (res.data !== 'opened') {
                    const notebook = res.data
                    const existed = getters.notebooks.find(el => el.filename === filename)
                    if (existed) {
                        //Open from disk but need to check if is not saved
                        commit('SET_CURRENT', existed)
                    } else {
                        commit('ADD_NOTEBOOK', { ...notebook, filename })                         
                        commit('SET_CURRENT', getters.notebooks[getters.notebooks.length - 1])
                    }
                }
            } catch (e) {
                throw new Error('Files failed: ' + e)
            }
        },        
        async renameFile({ commit, dispatch }: { commit: Commit; dispatch: Dispatch }, { file1, file2 }: { file1: string; file2: string}) {
            try {
                const res = await api.put('/fileSystem', { file1, file2 })
                dispatch('getFiles')
            } catch (e) {
                throw new Error('Files failed: ' + e)
            }
        }, 
        async saveFile({ commit, dispatch }: { commit: Commit; dispatch: Dispatch }, { file, body }: { file: string; body: string}) {
            try {
                const res = await api.post('/fileSystem', { file, body })
            } catch (e) {
                throw new Error('saveFile failed: ' + e)
            }
        }, 
        //  delete to trash
    }
}
