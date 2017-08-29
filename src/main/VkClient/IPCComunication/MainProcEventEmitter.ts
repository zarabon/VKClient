import {MainEvents, MainEvents as me} from "./events/MainEvents";
import {AppLifeCycle} from "../AppRunner/AppLifeCycle";

export class MainProcEventEmitter {
    /**
     * @desc emmit ipc event to render process
     * @param {MainEvents} event
     * @param obj
     * @return {MainProcEventEmitter}
     */
    emitEvent(event: MainEvents, obj:any): MainProcEventEmitter {
        AppLifeCycle.inst.electronManager.mainWindow.webContents.send(event,obj)
        return this
    }
}