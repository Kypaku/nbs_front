import { State as FileSystemState } from '@/store/modules/fileSystem'
import { State as NotebooksState } from '@/store/modules/notebooks'
import { State as KernelsState } from '@/store/modules/kernels'
import { State as SettingsState } from '@/store/modules/settings'

export interface Getters {
    [key: string]: any
}

export default interface Store {
    fileSystem: FileSystemState
    notebooks: NotebooksState
    kernels: KernelsState
    settings: SettingsState
} 