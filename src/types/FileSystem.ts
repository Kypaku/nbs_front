export default interface FileSystem {
    root: Directory
}

export interface Directory {
    name: string,
    files: (File | Directory)[],
}

export interface File {
    name: string,
    info: null | FileInfo,
}

export interface FileInfo {

}