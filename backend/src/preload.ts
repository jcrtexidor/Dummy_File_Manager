import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
    versions: {
        node: process.versions.node,
        chrome: process.versions.chrome,
        electron: process.versions.electron
    },
    openFile: () => ipcRenderer.invoke('dialog:openFile'),
    getFile: (path: any) => ipcRenderer.invoke('getFile', path),
    getParent: (path: any) => ipcRenderer.invoke('getParentFolder', path),
    getHomeDir: () => ipcRenderer.invoke('getHomeDir'),
    getFiles: (path: any) => ipcRenderer.invoke('getFiles', path),
})

