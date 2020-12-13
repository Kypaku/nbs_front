import Kernel from '@/types/Kernel'
import { Getters } from '../../types/store'
import { Commit, Dispatch, ActionTree } from 'vuex'
import api from '../../api'
import Vue from 'vue'
import Cell from '@/types/Cell'

export interface State {
    kernels: Kernel[];
    current: null | Kernel;
}

export default {
    state: {
        kernels: [],
        current: null
    } as State,
    mutations: {
		SET_KERNELS: (state: State, kernels: Kernel[]) => {
            state.kernels = kernels
        },
        ADD_KERNEL: (state: State, kernel: Kernel) => {
            state.kernels.push(kernel)
        },
        DEL_KERNEL: (state: State, name: string) => {
            state.kernels = state.kernels.filter(kernel => kernel.name !== name)
        },
        // RENAME_KERNEL
        UPD_KERNEL: (state: State, { name, attr, value, valueJson }: { name: string; attr: string; value: any; valueJson: any }) => {
            for (const kernel of state.kernels) {
                if (kernel.name === name) {
                    Vue.set(kernel, attr, value || valueJson)
                    return true
                }
            }
        },
        SET_CURRENT_KERNEL: (state: State, kernel: Kernel) => {
            state.current = kernel
        },
    },
    actions: {        
        async getKernels({ commit }: { commit: Commit }) {
            try {
                const req = await api.get('/kernels')
                const data = req.data
                commit('SET_KERNELS', data)
                return true
            } catch (e) {
                // commit('SET_ERROR', 'Failed to add kernel')
                throw e
            }
        },
        async addKernel({ commit, getters }: { commit: Commit; getters: Getters }, kernel: Kernel) {
            try {
                if (getters.kernels.find((el: Kernel) => el.name === kernel.name)) {
                    // commit('SET_ERROR', 'Kernel is alredy exists')
                } else {                    
                    const req = await api.post('/kernels', kernel)
                    const data = req.data
                    commit('ADD_KERNEL', data)
                    return true
                }
            } catch (e) {
                // commit('SET_ERROR', 'Failed to add kernel')
                throw e
            }
        },
        async delKernel({ commit, getters }: { commit: Commit; getters: Getters }, name: string) {
            try {
                const req = await api.delete('/kernels/' + name)
                commit('DEL_KERNEL', name)
                return req
            } catch (e) {
                // commit('SET_ERROR', 'Failed to delete kernel')
                throw e
            }
        },
        async editKernel({ commit, getters }: { commit: Commit; getters: Getters }, { name, attr, value, valueJson }: { name: string; attr: string; value: any; valueJson: any }) {
            try {
                const req = await api.put('/kernels/' + name, { attr, value, valueJson: JSON.stringify(valueJson) })
                commit('UPD_KERNEL', { name, attr, value, valueJson })
                return req
            } catch (e) {
                // commit('SET_ERROR', 'Failed to delete kernel')
                throw e
            }
        },
        async eval({ commit, getters }: { commit: Commit; getters: Getters }, { kernel, cell }: { kernel: Kernel; cell: Cell }) {
            try {
                const req = await api.post('/kernels/eval/' + kernel.name, { content: cell.input.content })
                const data = req.data
                commit('EDIT_CELL', { id: cell.id, output: { ...cell.output, content: data } })
                return true
            } catch (e) {
                // commit('SET_ERROR', 'Failed to add kernel')
                throw e
            }
        },
    }
}
