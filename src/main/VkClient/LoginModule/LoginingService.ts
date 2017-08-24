import {Token} from "../APIServerCominicator/TokenRightsChecker/domain/Token";
import state from '../Store'
import {SetLogged, SetToken} from "../Store/actions/UserDataActions";
import {ipcMain} from 'electron'
import {TokenRights} from "../APIServerCominicator/TokenRightsChecker/TokenRights";

const opn = require('opn');

//TODO place this in settings in store
const TOKEN_PERMISSIONS_BITMASK = TokenRights.FRIENDS + TokenRights.GROUPS + TokenRights.MESSAGES
const MY_APP_ID = '6159630'
const API_VERSION = '5.67'
//-------------------------------------------

export class LoginingService {

    //package for simple http request
    //https://www.npmjs.com/package/http_request
    private static httpRequest = require('http_request');

    /**
     * Open user browser on page to get a token for authorization
     * */
    public static openUserBrowserWithToken() {
        let url = `https://oauth.vk.com/authorize?client_id=${MY_APP_ID}&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=${TOKEN_PERMISSIONS_BITMASK}&response_type=token&v=${API_VERSION}'`

        opn(url)
    }

    /**
     * Check using http request if user token is valid and have enough permissions
     * @return null if token not valid
     */
    public static checkUserToken(token: Token): Token {


        return null
    }

    /**
     * Adding using info to the storage,
     * @warn use this only if token has been checked
     * */

    public static registerUserTokenToStorage(token: Token) {
        state.dispatch(new SetToken(token))
        state.dispatch(new SetLogged(true))
    }

    //Todo add notify render about invalid token
    public static invalidateUserLogged() {
        state.dispatch(new SetToken(null))
        state.dispatch(new SetLogged(false))
    }


}