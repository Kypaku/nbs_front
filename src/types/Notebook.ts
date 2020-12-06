import Cell from './Cell';

export default interface Notebook {
    preferences: NotebookPreferences,
    kernelName: string,
    cells: Cell[],
}

export interface NotebookPreferences {

}