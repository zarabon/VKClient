/**
 * Domain class describes a single route
 * */
import {RouteMethodsTypes} from "./RouteMethodsTypes";

export class Route {
    private _routeMethod:RouteMethodsTypes
    private _URI:string;
    private _callbackFunction:(req,res,next?)=>void


    constructor(routeMethod: RouteMethodsTypes, URI: string, callbackFunction: (req,res,next?)=>{}) {
        this._routeMethod = routeMethod;
        this._URI = URI;
        this._callbackFunction = callbackFunction;
    }

    get URI(): string {
        return this._URI;
    }

    set URI(value: string) {
        this._URI = value;
    }

    get callbackFunction(): (req,res,next?)=>void {
        return this._callbackFunction;
    }

    set callbackFunction(value: (req,res,next?)=>void) {
        this._callbackFunction = value;
    }


    get routeMethod(): RouteMethodsTypes {
        return this._routeMethod;
    }

    set routeMethod(value: RouteMethodsTypes) {
        this._routeMethod = value;
    }
}