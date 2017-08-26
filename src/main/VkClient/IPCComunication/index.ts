import {MainEvents as me} from "./events/MainEvents";
import {RenderEvents as re} from "./events/RenderEvents";
import {LoginingService} from "../LoginModule/LoginingService";
import {MainProcEventEmitter} from "./MainProcEventEmitter";
import tokenRightsChecker from "../APIServerCominicator/TokenRightsChecker/index";
import {TokenRights} from "../APIServerCominicator/TokenRightsChecker/TokenRights";
import {Token} from "../APIServerCominicator/TokenRightsChecker/domain/Token";
import loginingService from "../LoginModule/index";


//TODO place this in settings in store
const TOKEN_PERMISSIONS = [TokenRights.FRIENDS, TokenRights.GROUPS, TokenRights.MESSAGES]
const ipc = require('electron').ipcMain

/**
 * Register all ipc events
 */

//handling render process events
export function handleRenderProсessEvents() {
    ipc

    //open browser with authorization windows
        .on(re.OPEN_BROWSER_LOGIN, () => loginingService.openUserBrowserWithToken())

        //adding token from render process to main process storage
        .on(re.SAVE_TOKEN, token => {

            let tokenObj = convertJSONTokenToToken(token)
            if (tokenObj === null)
            //TODO add emitting error to render process if token not valid
                return

            tokenRightsChecker.checkTokenRights(tokenObj, TOKEN_PERMISSIONS)
                .then(isTokenHavePermissions => {
                    if (isTokenHavePermissions) {
                        loginingService.registerUserTokenToStorage(tokenObj)
                    } else {
                        //TODO add emitting error to render process if token have not enough permissions
                    }
                })
        })
}

/**
 *
 * @param token - json from render process
 * @return {Token}
 * @return null if param not valid
 */
function convertJSONTokenToToken(token): Token {
    //check if @param token has no fields accessToken and userId and return null
    if (!(('userId' in token) && ('accessToken' in token))) {
        return null
    }

    let retToken: Token = new Token(token['userId'], token['accessToken'])

    retToken.expireTime = 'expireTime' in token ? token['expireTime'] : null
    retToken.generationTime = 'generationTime' in token ? token['generationTime'] : null

    return retToken


}

//emitting events from main process
export const mainProcEventEmitter = new MainProcEventEmitter