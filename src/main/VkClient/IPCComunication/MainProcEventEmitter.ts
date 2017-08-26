const ipc = require('electron').ipcMain
import {MainEvents, MainEvents as me} from "./events/MainEvents";

export class MainProcEventEmitter{
    registerEvent(event:MainEvents,cb:(...p)=>void):MainProcEventEmitter{
        ipc.on(event,cb)
        return this
    }
}