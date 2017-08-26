const ipc = require('electron').ipcMain
import {MainEvents, MainEvents as me} from "./events/MainEvents";

export class MainProcEventEmitter {
    /**
     * @desc emmit ipc event to render process
     * @param {MainEvents} event
     * @param {(...p) => void} cb
     * @return {MainProcEventEmitter}
     */
    emitEvent(event: MainEvents, cb: (...p) => void): MainProcEventEmitter {
        ipc.emit(event, cb)
        return this
    }
}