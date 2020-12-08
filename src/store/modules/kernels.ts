import Kernel from '@/types/Kernel'
import { Getters } from '../../types/store'
import { Commit, Dispatch, ActionTree } from 'vuex'
import api from '../../api'

export interface State {
    kernels: Kernel[],
    current: null | Kernel,
}

export default {
    state: {
        kernels: [],
        current: null,
    } as State,
    mutations: {
        ADD_KERNEL: (state: State, kernel: Kernel) => {
            state.kernels.push(kernel)
        },
        DEL_KERNEL: (state: State, name: string) => {
            state.kernels = state.kernels.filter( kernel => kernel.name !== name)
        },
        // RENAME_KERNEL
        // UPD_KERNEL: (state: State, {name, settings} : {name: string, settings: Pub[]}) => {
        //     for (const kernel of state.kernels) {
        //         if(kernel._id == _id){
        //             kernel.pubs = pubs
        //             return true
        //         }
        //     }
        // },    
        //SET_CURRENT
    },
    actions: {
        async addKernel({ commit, getters }: { commit: Commit, getters: Getters }, kernel: Kernel) {
            try {
                const req = await api.post('/kernels', kernel)
                const data = req.data.data
                commit('ADD_KERNEL', data)
                return true
            }
            catch (e) {
                // commit('SET_ERROR', 'Failed to add kernel')
                throw e
            }
        },        
        async delKernel({ commit, getters }: { commit: Commit, getters: Getters }, name: string) {
            try {
                const req = await api.delete('/kernels/' + name)
                commit('DEL_KERNEL', name)
                return req
            }
            catch (e) {
                // commit('SET_ERROR', 'Failed to delete kernel')
                throw e
            }            
        },          
    }
}