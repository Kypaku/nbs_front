import Notebook from '@/types/Notebook';
import { Getters } from '@/types/store';
import { Commit, Dispatch, ActionTree } from 'vuex'
import api from '../../api'

export interface State {
    notebooks: Notebook[],
    current: null | Notebook,
}

export default {
    state: {
        notebooks: [],
        current: null,
    } as State,
    mutations: {
        //NOTEBOOKS: OPEN, CREATE, EDIT, DELETE, REARRANGE
        //CELLS: ADD, EDIT, DELETE, REARRANGE
    },
    actions: {
        
    }
}