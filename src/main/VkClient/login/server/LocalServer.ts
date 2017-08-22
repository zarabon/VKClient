import * as http from "http";
import {DIContainer} from "../../DI/DIContainer";
import {ErrorService} from "../../ErrorsHandling/ErrorService";
import {SystemError} from "../../ErrorsHandling/SystemError";
import {} from "./LocalServerRouter"
import {router} from "./ServerRouter";

const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

export class LocalServer {
    private port: number = 3000;//port number

    private errorService: ErrorService;

    startServer() {
        this.initializeExpressServer()
        app.set('port', this.port);
        let server = http.createServer(app);

        server.listen(this.port)
        server.on('error', this.serverOnError)

    }

    private initializeExpressServer() {
        app.use(logger('dev'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(express.static(path.join(__dirname, 'public')));
        //adding router
        app.use('/', router)
        //routing other request
        app.use(function (req, res, next) {
            let err = new Error('Not Found');
            err['status'] = 404;
            next(err);
        });

        // catch 404 and forward to error handler

    }

    private serverOnError(error) {
        switch (error) {
            case 'EACCES':
                console.error('Server requires elevated privileges');//TODO replace with logger
                this.errorService.showErrorDialog(new SystemError('EACCES', 'Server requires elevated privileges'))
                break;
            case 'EADDRINUSE':
                console.error(`Port ${this.port} is already in use`);//TODO replace with logger
                this.errorService.showErrorDialog(new SystemError('EADDRINUSE', `Port ${this.port} is already in use`))
                break;
            default:
                throw error;
        }
    }

    constructor() {
        setTimeout(() => {
            //TODO fix this!!!!!
            this.errorService = DIContainer.getInstance('ErrorService') as ErrorService
        },10)
    }


}