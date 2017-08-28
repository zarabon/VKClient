export class ComunicatorSettings{
    private _userId:string;
    private _token:string;
    private _version:string;

    constructor(userId?: string, token?: string, version?: string) {
        this._userId = userId;
        this._token = token;
        this._version = version;
    }


    get userId(): string {
        return this._userId;
    }

    set userId(value: string) {
        this._userId = value;
    }

    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }

    get version(): string {
        return this._version;
    }

    set version(value: string) {
        this._version = value;
    }
}