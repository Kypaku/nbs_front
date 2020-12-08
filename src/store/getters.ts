import State from '@/types/store'

export default {
    kernels: (state: State) => state.kernels.kernels,
    kernel: (state: State) => state.kernels.current,

    notebooks: (state: State) => state.notebooks.notebooks,
    current: (state: State) => state.notebooks.current,
    currentCell: (state: State) => state.notebooks.current?.currentCell,
}
