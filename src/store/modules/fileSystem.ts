import { Directory, File } from '@/types/FileSystem'
import { Getters } from '@/types/store'
import { Commit, Dispatch, ActionTree } from 'vuex'
import api from '../../api'

export interface State {
    files: (File | Directory)[];
}

export default {
    state: {
        files: []
    } as State,
    mutations: {
		SET_FILES: (state: State, files: (File | Directory)[]) => {
            state.files = files
        },
        //Recursive find
		// SET_CHILDREN: (state: State, { dir, files }: { dir: string, files: (File | Directory)[] }) => {
        //     const dirEl = state.files.find(el => el.name === dir)
        //     if (dirEl && dirEl.files) {                
        //         dirEl.files = files
        //     }
        // },
    },
    actions: {
		async getFiles({ commit }: { commit: Commit }, dir: string) {
            try {
                const res = await api.get('/fileSystem?path=' + dir)
                commit('SET_FILES', res.data.map((file: any) => {
                    return {
                        name: file.path,
                        info: { ...file }                        
                    }
                })) // OR SET_CHILDREN
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
        //  delete to trash
    }
}
