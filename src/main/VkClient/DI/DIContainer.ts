import {NoSuchClassIntanseExeption} from "./NoSuchClassIntanseExeption";
import {LocalServer} from "../LocalServer/LocalServer";
import {InstanceAlreadyExists} from "./InstanceAlreadyExists";
import {ErrorService} from "../ErrorsHandling/ErrorService";

//Ioc container SingleTon
export class DIContainer {
    private objMap = {};

    private static singletonInstance = new DIContainer

    private constructor() {
        this.initializes();
    }

    //initializes container, creating instances of proper classes
    //TODO rework this hardcode
    private initializes() {
        this.objMap['ErrorService'] = new ErrorService();
        this.objMap['LocalServer'] = new LocalServer();
    }

    //static public methods
    public static getInstance(className: string){
        return this.singletonInstance._getInstance(className)
    }

    public static setInstance(className: string, obj: any): void {
        return this.singletonInstance._setInstance(className, obj)
    }

    //throws NoSuchClassIntanseExeption
    private _getInstance(className: string): Object {
        if (this.objMap.hasOwnProperty(className)) {
            return this.objMap[className];
        }

        throw new NoSuchClassIntanseExeption();
    }

    //throws InstanceAlreadyExists
    private _setInstance(className: string, obj: any): void {
        if (this.objMap.hasOwnProperty(className)) {
            throw new InstanceAlreadyExists();
        }

        this.objMap[className] = obj;
    }
}