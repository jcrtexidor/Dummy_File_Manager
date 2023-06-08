import path from 'node:path';
import fs from 'node:fs/promises';
import os from 'node:os';

export const getFiles = async (root: string) => {
    root = path.resolve(root);
    const dirents = await fs.readdir(root, { withFileTypes: true });
    const files = dirents.map(dirent => ({
        name: dirent.name,
        path: path.join(root, dirent.name),
        extension: path.extname(dirent.name),
        isDirectory: dirent.isDirectory(),
        isFile: dirent.isFile(),
        isSymbolicLink: dirent.isSymbolicLink(),
        isSocket: dirent.isSocket(),
        isCharacterDevice: dirent.isCharacterDevice(),
        isBlockDevice: dirent.isBlockDevice(),
        isFIFO: dirent.isFIFO(),
    }));
    return files;
}

export const getFile = async (filePath) => {
    const stats = await fs.stat(filePath);

    const file = {
        name: path.basename(filePath),
        path: filePath,
        extension: path.extname(filePath),
        isDirectory: stats.isDirectory(),
        isFile: stats.isFile(),
        isSymbolicLink: stats.isSymbolicLink(),
        isSocket: stats.isSocket(),
        isCharacterDevice: stats.isCharacterDevice(),
        isBlockDevice: stats.isBlockDevice(),
        isFIFO: stats.isFIFO(),
        dev: stats.dev,
        ino: stats.ino,
        mode: stats.mode,
        nlink: stats.nlink,
        uid: stats.uid,
        gid: stats.gid,
        rdev: stats.rdev,
        size: stats.size,
        blksize: stats.blksize,
        blocks: stats.blocks,
        atimeMs: stats.atimeMs,
        mtimeMs: stats.mtimeMs,
        ctimeMs: stats.ctimeMs,
        birthtimeMs: stats.birthtime,
        atime: stats.atime,
        mtime: stats.mtime,
        ctime: stats.ctime,
        birthtime: stats.birthtime
    };
    return file;
}

