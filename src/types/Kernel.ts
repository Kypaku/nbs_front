export default interface Kernel {
    name: string;
    // port: number,
    settings: KernelSettings;
    status: string;
}

export interface KernelSettings {
    type: string //server | browser | electron
}
