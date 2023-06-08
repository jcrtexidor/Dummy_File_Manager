import { ipcMain, dialog } from 'electron';
import os from 'node:os';
import path from 'node:path';

import { getFile, getFiles } from './services';

ipcMain.handle('dialog:openFile', async (event) => {
    const { canceled, filePaths } = await dialog.showOpenDialog({});
    if (canceled) { }
    else { return filePaths[0]; }
});

ipcMain.handle('getFiles', async (event, filePath) => {
    return getFiles(filePath);
});

ipcMain.handle('getFile', async (event, filePath) => {
    return getFile(filePath);
});

ipcMain.handle('getParentFolder', async (event, filePath) => {
    return getFile(path.dirname(filePath));
});

ipcMain.handle('getHomeDir', async (event) => {
    return getFile(os.homedir());
});

