import {
    app,
    BrowserWindow
} from 'electron'


const ipc = require('electron').ipcMain

import {vkClient}  from './VkClient/main'
import {Route} from "./VkClient/LocalServer/router/Route";
import {RouteMethodsTypes} from "./VkClient/LocalServer/router/RouteMethodsTypes";


//let vk = require('./VkClient')
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
    global['__static'] = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development' ?
    `http://localhost:9080` :
    `file://${__dirname}/index.html`

function createWindow() {
    /**
     * Initial window options
     */
    mainWindow = new BrowserWindow({
        height: 563,
        useContentSize: true,
        width: 1000
    })

    mainWindow.loadURL(winURL)

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})

ipc.on('synchronous-message',function (event, arg) {
    event.returnValue = vkClient;
    vkClient.server.startServer(null,new Route(RouteMethodsTypes.GET,"/",(req,res,next)=>{
        res.json({test: "hello"});
        return null
    }))
});

const opn = require('opn');
ipc.on('open-browser-login',function () {
    opn('https://oauth.vk.com/authorize?client_id=6159630&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=4098&response_type=token&v=5.67')
})
/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */