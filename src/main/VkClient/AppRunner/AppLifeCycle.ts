import {handleRenderProсessEvents} from '../IPCComunication/index'
import store, {StoreState} from "../Store/index";
import {APIComunicator} from "../APIServerCominicator/APIComunicator";
import {ComunicatorSettings} from "../APIServerCominicator/CommunicatorSettings";
import {
    app,
    BrowserWindow
} from 'electron'
import {ElectronManager} from "../ElectronManager/ElectronManager";


const WIN_URL = process.env.NODE_ENV === 'development' ? `http://localhost:9080` : `file://${__dirname}/index.html`
const HEIGHT = 1000//TODO move to settings
const WEIGHT = 1000
/**
 * Entry point for VKClient(main process)
 * @singleton
 */
export class AppLifeCycle {
    public static inst:AppLifeCycle = new AppLifeCycle()

    private _vkAPI:APIComunicator = new APIComunicator
    private _electronManager:ElectronManager = new ElectronManager

    private constructor() {
        //register handling for ipc events from render process
        handleRenderProсessEvents()
        store.subscribe(() => {
            let settings:ComunicatorSettings = this._vkAPI.getCommunicatorSettings()
            let storeState:StoreState = store.getState()
            if (storeState.userData.isLogged) {
                settings.token = storeState.userData.token.accessToken
                settings.userId = storeState.userData.userId
                this._vkAPI.setCommunicatorSettings(settings)
            }
        })
    }

    public start(){
        app.on('ready', ()=>this._electronManager.createMainWindow(WIN_URL,HEIGHT,WEIGHT))

        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit()
            }
        })

        app.on('activate', () => {
            if (this._electronManager.mainWindow === null) {
                this._electronManager.createMainWindow(WIN_URL,HEIGHT,WEIGHT)
            }
        })
    }



    get electronManager(): ElectronManager {
        return this._electronManager;
    }

    get vkAPI(): APIComunicator {
        return this._vkAPI;
    }
}