
/**
 * Entity class for token
 * time in unixtame
 * */
export class Token{
    private _userId:string;
    private _generationTime:number;
    private _expireTime:number;


    constructor(userId: string, generationDate?, expireTime?) {
        this._userId = userId;
        this._generationTime = generationDate;
        this._expireTime = expireTime;
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
}