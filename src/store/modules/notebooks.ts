import Notebook from '@/types/Notebook'
import { Getters } from '@/types/store'
import { Commit, Dispatch, ActionTree } from 'vuex'
import api from '../../api'
import { uuid } from '../../helpers/index'
import Vue from 'vue'
import Cell from '@/types/Cell'

export interface State {
    notebooks: Notebook[];
    current: null | Notebook;
}

export default {
    state: {
        notebooks: [],
        current: null,
    } as State,
    mutations: {
        ADD_NOTEBOOK: (state: State, notebook: Notebook) => {
            state.notebooks.push(notebook)
        },
        EDIT_NOTEBOOK: (state: State, notebook: Notebook) => {
            const item = state.notebooks.find(el => el.filename === notebook.filename)
            item && Object.entries(notebook).forEach(el => {
                Vue.set(item, el[0], el[1])
            })
        },
        DELETE_NOTEBOOK: (state: State, filename: string) => {
            state.notebooks = state.notebooks.filter(el => el.filename !== filename)
        },
        REARRANGE_NOTEBOOKS: (state: State, order: [string, number][]) => {
            const old = [...state.notebooks]
            state.notebooks = []
            order.forEach(el => {
                Vue.set(state.notebooks, el[1], old.find(_el => _el.filename === el[0]))
            })
        },
        SET_CURRENT: (state: State, notebook: Notebook) => {
            state.current = notebook
        },        
        ADD_CELL: (state: State, cell: Cell) => {
            const id = uuid()
            state.current && state.current.cells.push({ ...cell, id })
        },
        INSERT_CELL: (state: State, { cell, pos }: { cell: Cell; pos: number }) => {
            if (!state.current) return
            const id = uuid()
            state.current.cells.splice(pos, 0, { ...cell, id })
        },
        EDIT_CELL: (state: State, cell: Cell) => {
            if (!state.current) return
            const item = state.current.cells.find(el => el.id === cell.id)
            item && Object.entries(cell).forEach(el => {
                Vue.set(item, el[0], el[1])
            })
        },
        DELETE_CELL: (state: State, id: string) => {
            if (!state.current) return
            state.current.cells = state.current.cells.filter(el => el.id !== id)
        },
        REARRANGE_CELLS: (state: State, order: [string, number][]) => {
            if (!state.current) return
            const old = [...state.current.cells]
            state.current.cells = []
            order.forEach(el => {
                state.current && Vue.set(state.current.cells, el[1], old.find(_el => _el.id === el[0]))
            })
        },
        SET_CURRENT_CELL: (state: State, cell: Cell) => {
            if (!state.current) return
            state.current.currentCell = cell
        },         
    },
    actions: {
        // notebooks: open, create, rename, save, delete
    }
}
