
/**
 * Entity class for token
 * time in unixtame
 * */
export class Token{
    private _userId:string;
    private _generationTime:number;
    private _expireTime:number;
    private _access_token:string;


    constructor(userId: string,access_token: string, generationTime?: number, expireTime?: number, ) {
        this._userId = userId;
        this._generationTime = generationTime;
        this._expireTime = expireTime;
        this._access_token = access_token;
    }

    get userId(): string {
        return this._userId;
    }

    set userId(value: string) {
        this._userId = value;
    }

    get generationTime() {
        return this._generationTime;
    }

    set generationTime(value) {
        this._generationTime = value;
    }

    get expireTime() {
        return this._expireTime;
    }

    set expireTime(value) {
        this._expireTime = value;
    }

    get access_token(): string {
        return this._access_token;
    }

    set access_token(value: string) {
        this._access_token = value;
    }
}