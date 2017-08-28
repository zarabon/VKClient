import {Message} from "../domain/Message";

export class MessageBuilder {
    private _id: number
    private _date: number
    private _isOutgoing: boolean
    private _userId: number
    private _readState: boolean
    private _title: string
    private _body: string
    private _random_id: number

    static newBuilder():MessageBuilder{
        return new MessageBuilder
    }

    build():Message{
        return new Message(this._id,this._date,this._isOutgoing,this._userId,this._readState,this._title,this._body,this._random_id)
    }

    setId(value: number): MessageBuilder {
        this._id = value;
        return this;
    }

    setDate(value: number): MessageBuilder {
        this._date = value;
        return this;
    }

    setIsOutgoing(value: boolean): MessageBuilder {
        this._isOutgoing = value;
        return this;
    }

    setUserId(value: number): MessageBuilder {
        this._userId = value;
        return this;
    }

    setReadState(value: boolean): MessageBuilder {
        this._readState = value;
        return this;
    }

    setTitle(value: string): MessageBuilder {
        this._title = value;
        return this;
    }

    setBody(value: string): MessageBuilder {
        this._body = value;
        return this;
    }

    setRandom_id(value: number): MessageBuilder {
        this._random_id = value;
        return this;
    }

}