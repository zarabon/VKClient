import {Token} from "./TokenRightsChecker/domain/Token";
import state from '../Store'
import {SetLogged, SetToken} from "../Store/actions/UserDataActions";

export class LoginingService {

    //package for simple http request
    //https://www.npmjs.com/package/http_request
    private static httpRequest = require('http_request');

    constructor() {

    }

    /**
     * Check using http request if user token is valid and have enough permissions
     * @return null if token not valid
     */
    public static checkUserToken(token:Token):Token {


        return null
    }

    /**
     * Adding using info to the storage,
     * @warn use this only if token has been checked
     * */

    public static registerUserTokenToStorage(token:Token){
        state.dispatch(new SetToken(token))
        state.dispatch(new SetLogged(true))
    }

    //Todo add notify render about invalid token
    public static invalidateUserLogged(){
        state.dispatch(new SetToken(null))
        state.dispatch(new SetLogged(false))
    }


}