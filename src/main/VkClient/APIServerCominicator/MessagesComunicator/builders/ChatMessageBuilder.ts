import {ChatMessage} from "../domain/ChatMessage";

export class ChatMessageBuilder {
    private _action: string;
    private _action_mid: number
    private _chat_id: number
    private _chat_active: Array<number>
    private _users_count: string
    private _admin_id: number
    private _id: number
    private _date: number
    private _isOutgoing: boolean
    private _userId: number
    private _readState: boolean
    private _title: string
    private _body: string
    private _random_id: number
    private _photo_50_url: string
    private _photo_100_url: string
    private _photo_200_url: string


    static newBuilder(): ChatMessageBuilder {
        return new ChatMessageBuilder
    }

    build(): ChatMessage {
        return new ChatMessage(this._id, this._date, this._isOutgoing, this._userId, this._readState,
            this._title, this._body, this._random_id, this._action, this._action_mid, this._chat_id,
            this._chat_active, this._users_count, this._admin_id, this._photo_50_url, this._photo_100_url, this._photo_200_url)
    }

    setAction(value: string): ChatMessageBuilder {
        this._action = value;
        return this;
    }

    setAction_mid(value: number): ChatMessageBuilder {
        this._action_mid = value;
        return this;
    }

    setChat_id(value: number): ChatMessageBuilder {
        this._chat_id = value;
        return this;
    }

    setChat_active(value: Array<number>): ChatMessageBuilder {
        this._chat_active = value;
        return this;
    }

    setUsers_count(value: string): ChatMessageBuilder {
        this._users_count = value;
        return this;
    }

    setAdmin_id(value: number): ChatMessageBuilder {
        this._admin_id = value;
        return this;
    }

    setId(value: number): ChatMessageBuilder {
        this._id = value;
        return this;
    }

    setDate(value: number): ChatMessageBuilder {
        this._date = value;
        return this;
    }

    setIsOutgoing(value: boolean): ChatMessageBuilder {
        this._isOutgoing = value;
        return this;
    }

    setUserId(value: number): ChatMessageBuilder {
        this._userId = value;
        return this;
    }

    setReadState(value: boolean): ChatMessageBuilder {
        this._readState = value;
        return this;
    }

    setTitle(value: string): ChatMessageBuilder {
        this._title = value;
        return this;
    }

    setBody(value: string): ChatMessageBuilder {
        this._body = value;
        return this;
    }

    setRandom_id(value: number): ChatMessageBuilder {
        this._random_id = value;
        return this;
    }


    setPhoto_50_url(value: string): ChatMessageBuilder {
        this._photo_50_url = value;
        return this;
    }

    setPhoto_100_url(value: string): ChatMessageBuilder {
        this._photo_100_url = value;
        return this;
    }

    setPhoto_200_url(value: string): ChatMessageBuilder {
        this._photo_200_url = value;
        return this;
    }
}