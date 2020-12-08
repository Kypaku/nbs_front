import Cell from './Cell'

export default interface Notebook {
    preferences: NotebookPreferences;
    kernelName: string;
    cells: Cell[];
    currentCell: Cell;
    filename: string;
}

export interface NotebookPreferences {

}
