import { parentDirectory } from './../../node_modules/gm_node/index.js'
import State from '@/types/store'

export default {
    files: (state: State) => state.fileSystem.files,
    root: (state: State) => parentDirectory(...state.fileSystem.files),

    kernels: (state: State) => state.kernels.kernels,
    kernel: (state: State) => state.kernels.current,

    notebooks: (state: State) => state.notebooks.notebooks,
    current: (state: State) => state.notebooks.current,
    currentCell: (state: State) => state.notebooks.current?.currentCell,
}
