export default interface Cell {
    id: string;
    input: InputCell;
    output: OutputCell;
    settings: CellSettings;
    kernelName: string;
}

export interface InputCell {
    content: string;
    state: string;
    style: string;
}

export interface OutputCell {
    content: string;
    state: string;
    style: string;
}

export interface CellSettings {

}
