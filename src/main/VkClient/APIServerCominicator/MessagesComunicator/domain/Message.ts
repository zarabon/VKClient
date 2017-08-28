export class Message {
    private _id: number
    private _date: number
    private _isOutgoing: boolean
    private _userId: number
    private _readState: boolean
    private _title: string
    private _body: string
    private _random_id: number


    constructor(id: number, date: number, isOutgoing: boolean, userId: number, readState: boolean, title: string, body: string, random_id: number) {
        this._id = id;
        this._date = date;
        this._isOutgoing = isOutgoing;
        this._userId = userId;
        this._readState = readState;
        this._title = title;
        this._body = body;
        this._random_id = random_id;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get date(): number {
        return this._date;
    }

    set date(value: number) {
        this._date = value;
    }

    get isOutgoing(): boolean {
        return this._isOutgoing;
    }

    set isOutgoing(value: boolean) {
        this._isOutgoing = value;
    }

    get userId(): number {
        return this._userId;
    }

    set userId(value: number) {
        this._userId = value;
    }

    get readState(): boolean {
        return this._readState;
    }

    set readState(value: boolean) {
        this._readState = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get body(): string {
        return this._body;
    }

    set body(value: string) {
        this._body = value;
    }

    get random_id(): number {
        return this._random_id;
    }

    set random_id(value: number) {
        this._random_id = value;
    }
}