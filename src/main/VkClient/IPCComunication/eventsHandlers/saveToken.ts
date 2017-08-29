import {convertJSONTokenToToken} from "../../LoginModule/domain/convertJSONTokenToToken";
import loginingService from "../../LoginModule/index";
import {TokenRights} from "../../LoginModule/TokenRights";
import {Token} from "../../LoginModule/domain/Token";
import {mainProcEventEmitter} from "../index";
import {MainEvents} from "../events/MainEvents";

//TODO place this in settings in store
const TOKEN_PERMISSIONS = [TokenRights.FRIENDS, TokenRights.GROUPS, TokenRights.MESSAGES]
//--------------------------
/**
 * @desc saving token to LoginService
 * @param token
 */
export function saveToken(token) {
    if (token === undefined)
        return
    let tokenObj:Token = convertJSONTokenToToken(token)

    if (tokenObj === null){
        console.error('Bad token')
        //TODO add emitting error to render process if token not valid
        return
    }

    loginingService.checkTokenRights(tokenObj, TOKEN_PERMISSIONS)
        .then(isTokenHavePermissions => {
            if (isTokenHavePermissions) {
                loginingService.registerUserTokenToStorage(tokenObj)
                console.log('token saved')
                mainProcEventEmitter.emitEvent(MainEvents.TOKEN_SAVED, true)
            } else {
                console.error('problem')
                //TODO add emitting error to render process if token have not enough permissions
            }
        })
}