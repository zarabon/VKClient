import {Router} from "express";
import * as express from "express"
import {Route} from "./Route";
import {RouterFacade} from "./RouterFacade";

/**
 * Create router with routes
 * */
export class RouterFacadeFactory {

    public static createRouter(...routes):RouterFacade{
         let router:Router = express.Router();
         let routerFacade:RouterFacade = new RouterFacade(router)

         for (let route of routes){
            let localRoute:Route = route as Route
            routerFacade.addRoute(localRoute)
         }

        return routerFacade;
    }
}