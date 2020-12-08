import Cell from './Cell';

export default interface Notebook {
    preferences: NotebookPreferences,
    kernelName: string,
    cells: Cell[],
    filename: string
}

export interface NotebookPreferences {

}