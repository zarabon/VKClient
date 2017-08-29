import {
    BrowserWindow
} from 'electron'


export class ElectronManager {
    private _mainWindow

    createMainWindow(url: string, height: number, width: number, useContentSize?: boolean) {
        this._mainWindow = new BrowserWindow({
            height: height,
            useContentSize: useContentSize === undefined,
            width: width
        })

        this._mainWindow.loadURL(url)

        this._mainWindow.on('closed', () => {
            this._mainWindow = null
        })
    }

    get mainWindow() {
        return this._mainWindow;
    }

    set mainWindow(value) {
        this._mainWindow = value;
    }
}