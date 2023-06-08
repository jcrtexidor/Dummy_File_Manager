import { app, BrowserWindow, screen } from 'electron';
import path from 'node:path';
import * as listeners from './listeners';

const createWindow = () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    const win = new BrowserWindow({
        width,
        height,
        darkTheme: true,
        webPreferences: { preload: path.join(__dirname, 'preload.js') },
    })

    win.loadFile('../../frontend/dist/index.html');
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    })
    listeners;
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})