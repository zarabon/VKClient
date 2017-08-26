
/**
 * Entity class for token
 * time in unixtame
 * */
export class Token{
    private _userId:string;
    private _generationTime:number;
    private _expireTime:number;
    private _accessToken:string;


    constructor(userId: string,accessToken: string, generationTime?: number, expireTime?: number, ) {
        this._userId = userId;
        this._generationTime = generationTime;
        this._expireTime = expireTime;
        this._accessToken = accessToken;
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

    get accessToken(): string {
        return this._accessToken;
    }

    set accessToken(value: string) {
        this._accessToken = value;
    }
}