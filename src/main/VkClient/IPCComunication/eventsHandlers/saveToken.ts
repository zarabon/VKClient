import {convertJSONTokenToToken} from "../../LoginModule/domain/convertJSONTokenToToken";
import loginingService from "../../LoginModule/index";
import {TokenRights} from "../../LoginModule/TokenRights";

//TODO place this in settings in store
const TOKEN_PERMISSIONS = [TokenRights.FRIENDS, TokenRights.GROUPS, TokenRights.MESSAGES]
//--------------------------
/**
 * @desc saving token to LoginService
 * @param token
 */
export function saveToken(token) {

    let tokenObj = convertJSONTokenToToken(token)
    if (tokenObj === null)
    //TODO add emitting error to render process if token not valid
        return

    loginingService.checkTokenRights(tokenObj, TOKEN_PERMISSIONS)
        .then(isTokenHavePermissions => {
            if (isTokenHavePermissions) {
                loginingService.registerUserTokenToStorage(tokenObj)
            } else {
                //TODO add emitting error to render process if token have not enough permissions
            }
        })
}