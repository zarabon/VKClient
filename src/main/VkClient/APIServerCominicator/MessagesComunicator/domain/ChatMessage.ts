import {Message} from "./Message";

export class ChatMessage extends Message {
    private _action: string;
    private _action_mid: number
    private _chat_id: number
    private _chat_active: Array<number>
    private _users_count: string
    private _admin_id: number
    private _photo_50_url: string
    private _photo_100_url: string
    private _photo_200_url: string

    constructor(id: number, date: number, isOutgoing: boolean, userId: number, readState: boolean,
                title: string, body: string, random_id: number, action: string, action_mid: number,
                chat_id: number, chat_active: Array<number>, users_count: string, admin_id: number,
                photo_50_url: string, photo_100_url: string, photo_200_url: string) {
        super(id, date, isOutgoing, userId, readState, title, body, random_id);
        this._action = action;
        this._action_mid = action_mid;
        this._chat_id = chat_id;
        this._chat_active = chat_active;
        this._users_count = users_count;
        this._admin_id = admin_id;
        this._photo_50_url = photo_50_url;
        this._photo_100_url = photo_100_url;
        this._photo_200_url = photo_200_url;
    }


    get action(): string {
        return this._action;
    }

    set action(value: string) {
        this._action = value;
    }

    get action_mid(): number {
        return this._action_mid;
    }

    set action_mid(value: number) {
        this._action_mid = value;
    }

    get chat_id(): number {
        return this._chat_id;
    }

    set chat_id(value: number) {
        this._chat_id = value;
    }

    get chat_active(): Array<number> {
        return this._chat_active;
    }

    set chat_active(value: Array<number>) {
        this._chat_active = value;
    }

    get users_count(): string {
        return this._users_count;
    }

    set users_count(value: string) {
        this._users_count = value;
    }

    get admin_id(): number {
        return this._admin_id;
    }

    set admin_id(value: number) {
        this._admin_id = value;
    }
}