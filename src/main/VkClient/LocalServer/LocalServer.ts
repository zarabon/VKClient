import * as http from "http";
import {ErrorService} from "../ErrorsHandling/ErrorService";
import {SystemError} from "../ErrorsHandling/SystemError";
import {} from "./LocalServerRouter"
import {join} from 'path'
import {PortInUseExeption} from "./exeptions/PortAlreadyInUseExeption";
import {Route} from "./router/Route";
import {RouterFacade} from "./router/RouterFacade";
import {RouterFacadeFactory} from "./router/RouterFacadeFactory";

/// <reference path="../../../../node_modules/@types/body-parser/index.d.ts" />
import {json,urlencoded} from "body-parser"
/// <reference path="@types/express/index.d.ts" />
import * as express from "express"

//constants
const DEFAULT_PORT = 3000

/**
 * Class for creating local server on port, default port is 3000
 * To start server call method startServer
 *
 * */
//Todo Add Error when DI container will be ready
export class LocalServer {
    private port: number = DEFAULT_PORT;//port number
    private _isStartred = false
    private app = express()
    private routerFacade: RouterFacade;

    private errorService: ErrorService;

    constructor() {
        this.routerFacade = RouterFacadeFactory.createRouter()

    }

    public addRoute(route: Route) {
        this.routerFacade.addRoute(route)
    }

    // If port is not specified use default port from constant
    // throws PortAlreadyInUseExeption
    public startServer(port?: number, ...routes) {
        if (this._isStartred)
            return

        for (let route of routes) {
            let lroute = route as Route
            this.routerFacade.addRoute(lroute)
        }

        this.initializeExpressServer(port ? port : this.port)

        this._isStartred = true
    }

    //adding body parser, urlencoded, setting pass and error handling, configure listening on port
    private initializeExpressServer(port: number) {
        this.app.use(json());
        this.app.use(urlencoded({extended: false}));
        this.app.use(express.static(join(__dirname, 'public')));
        //adding router
        this.app.use('/', this.routerFacade.router)
        //routing other request
        this.app.use(function (req, res, next) {
            let err = new Error('Not Found');
            err['status'] = 404;
            next(err);
        });

        //setting server
        this.app.set('port', port);
        let server = http.createServer(this.app);
        server.listen(this.port)
        server.on('error', this.serverOnError)

    }

    private serverOnError(error) {
        switch (error) {
            case 'EACCES':
                console.error('Server requires elevated privileges');//TODO replace with logger
                this.errorService.showErrorDialog(new SystemError('EACCES', 'Server requires elevated privileges'))
                this.isStartred = false
                break;
            case 'EADDRINUSE':
                console.error(`Port ${this.port} is already in use`);//TODO replace with logger
                this.errorService.showErrorDialog(new SystemError('EADDRINUSE', `Port ${this.port} is already in use`))
                this.isStartred = false
                throw new PortInUseExeption();
            default:
                throw error;
        }
    }


    get isStartred(): boolean {
        return this._isStartred;
    }

    set isStartred(value: boolean) {
        this._isStartred = value;
    }
}