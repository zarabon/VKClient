import {SystemError} from "./SystemError";

const ipc_render = require('electron').ipcRenderer
const ipc_main = require('electron').ipcMain
const dialog = require('electron').dialog

export class ErrorService {

    public showErrorDialog(err:SystemError){
        dialog.showErrorBox(`Error ${err.code==null?'unknown code':err.code}`, err.message)
    }

}