

export interface IFile {
    name: string,
    path: string,
    extension: string,
    isDirectory: boolean,
    isFile: boolean,
    isSymbolicLink: boolean,
    isSocket: boolean,
    isCharacterDevice: boolean,
    isBlockDevice: boolean,
    isFIFO: boolean,
}

export interface IFileInfo extends IFile{
    dev: string,
    ino: string,
    mode: string,
    nlink: string,
    uid: string,
    gid: string,
    rdev: string,
    size: string,
    blksize: string,
    blocks: string,
    atimeMs: string,
    mtimeMs: string,
    ctimeMs: string,
    birthtimeMs: string,
    atime: string,
    mtime: string,
    ctime: string,
    birthtime: string,
}

declare global {
    interface Window {
        electronAPI: {
            versions: {
                node: string;
                chrome: string;
                electron: string;
            }
            getHomeDir: () => Promise<IFileInfo>;
            getFile: (path: string) => Promise<IFileInfo>;
            getParent: (path: string) => Promise<IFileInfo>;
            getFiles: (path: string) => Promise<IFile[]>;
        };
    }
}

