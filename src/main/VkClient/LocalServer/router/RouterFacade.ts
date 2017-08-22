import {Router} from "express";
import {Route} from "./Route";
import  {RouteMethodsTypes as RMT} from "./RouteMethodsTypes";


//adding method addRoute ro Router
export class RouterFacade {
    private _router:Router;

    constructor(router: Router) {
        this._router = router;
    }

    public addRoute(route:Route) {
        switch (route.routeMethod){
            case RMT.GET:{
                this._router.get(route.URI,route.callbackFunction)
                break
            }
            case RMT.POST:{
                this._router.post(route.URI,route.callbackFunction)
                break
            }
            default:{
                this._router.get(route.URI,route.callbackFunction)
            }

        }
    }


    get router(): Router {
        return this._router;
    }

    set router(value: Router) {
        this._router = value;
    }
}