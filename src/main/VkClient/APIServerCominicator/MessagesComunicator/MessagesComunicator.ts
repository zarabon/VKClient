import {Comunicator} from "../Comunicator";
import {Message} from "./domain/Message";
import {ChatMessage} from "./domain/ChatMessage";
import {ChatMessageBuilder} from "./builders/ChatMessageBuilder";
import {MessageBuilder} from "./builders/MessageBuilder";
import {ComunicatorSettings} from "../CommunicatorSettings";

const httpRequest = require('http_request')

const GET_DIALOGS_URL = 'https://api.vk.com/method/messages.getDialogs'

export class MessagesComunicator implements Comunicator {
    private communicatorSettings: ComunicatorSettings;

    getDialogs(count: number, start_message_id?: number, offset?: number, unread?: boolean, important?: boolean, unanswered?: boolean, preview_length?: number): Promise<Array<Message>> {
        return new Promise((resolve, reject) => {
            httpRequest.request(GET_DIALOGS_URL, {
                method: 'GET',
                body: {
                    access_token: this.communicatorSettings.token,
                    count: count,
                    v: this.communicatorSettings.version,
                    start_message_id: start_message_id,
                    offset:offset,
                    unread:unread===true?1:0,
                    important:important===true?1:0,
                    unanswered:unanswered===true?1:0,
                    preview_length:preview_length

                }
            }).then(resp => {
                let respBody = resp.getBody()
                if (('response' in respBody) && ('items' in respBody.response)) {
                    resolve(this.parseRespItemsToMessages(respBody.response.items))
                } else {
                    reject(resp.getBody())
                }
            })
            //TODO add checking error
                .catch(e => {
                    reject(e)
                })
        })


    }

    private parseRespItemsToMessages(items: Array<any>): Array<Message> {
        let retArr: Array<Message> = [];
        for (let item of items) {
            if ('message' in item) {
                retArr.push(this.parseObjToMessage(item.message));
            }
        }

        return retArr
    }

    private parseObjToMessage(obj: any): Message {
        //TODO add checking if object not valid
        if ("chat_id" in obj) {
            //creating ChatMessage
            return ChatMessageBuilder.newBuilder()
                .setId(obj['id'])
                .setDate(obj['date'])
                .setIsOutgoing(obj['out'] === 1)
                .setUserId(parseInt(obj['user_id']))
                .setReadState(obj['read-state'] === 1)
                .setTitle(obj['title'])
                .setBody(obj['body'])
                .setRandom_id(obj['random_id'])
                .setAction(obj['action'])
                .setAction_mid(obj['action_mid'])
                .setChat_id(obj['chat_id'])
                .setChat_active(obj['chat_active'])
                .setUsers_count(obj['users_count'])
                .setAdmin_id(obj['admin_id'])
                .setPhoto_50_url(obj['photo_50'])
                .setPhoto_100_url(obj['photo_100'])
                .setPhoto_200_url(obj['photo_200'])
                .build()
        } else {
            return MessageBuilder.newBuilder()
                .setId(obj['id'])
                .setDate(obj['date'])
                .setIsOutgoing(obj['out'] === 1)
                .setUserId(parseInt(obj['user_id']))
                .setReadState(obj['read-state'] === 1)
                .setTitle(obj['title'])
                .setBody(obj['body'])
                .setRandom_id(obj['random_id'])
                .build()
        }
    }

    setCommunicatorSettings(settings: ComunicatorSettings) {
        this.communicatorSettings = settings
    }

    getCommunicatorSettings(): ComunicatorSettings {
        return this.communicatorSettings
    }


}