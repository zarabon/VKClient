import {RenderEvents as re} from "./events/RenderEvents";
import {MainProcEventEmitter} from "./MainProcEventEmitter";
import loginingService from "../LoginModule/index";
import {ipcMain} from 'electron'
import {saveToken} from "./eventsHandlers/saveToken";


/**
 * Register all ipc events
 */

//handling render process events
export function handleRenderProсessEvents() {
    ipcMain

    //open browser with authorization windows
        .on(re.OPEN_BROWSER_LOGIN, () => loginingService.openUserBrowserWithToken())

        //adding token from render process to main process storage
        .on(re.SAVE_TOKEN, token => {
            saveToken(token)
        })
}

//emitting events from main process
export const mainProcEventEmitter = new MainProcEventEmitter