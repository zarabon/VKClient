import {LocalServer} from "../LocalServer/LocalServer";
import {Route} from "../LocalServer/router/Route";
import {RouteMethodsTypes} from "../LocalServer/router/RouteMethodsTypes";
import { EventEmitter} from 'events'
import {Token} from "./Token";

export class LoginingService {
    private localServer: LocalServer;
    private eventListener:EventEmitter = new EventEmitter;

    //package for simple http request
    //https://www.npmjs.com/package/http_request
    private static httpRequest = require('http_request');

    constructor() {

    }

    //Check using http request if user token is validate
    //@return null if token not valid
    public static getUserTokenInfo(token:string):Token {


        return null
    }

    public static test(token:string):Promise<string>{
        return new Promise(resolve => {
            LoginingService.httpRequest.post(`https://api.vk.com/method/getDialogs?count=30&access_token=${token}`)
                .then(resp=>{resolve(resp.getBody())})
        })

    }



}