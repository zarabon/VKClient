import {Chat} from './domain/Chat'
import {Message} from "../APIServerCominicator/MessagesComunicator/domain/Message";

export interface ChatCore{
    getDialogs(count?:number):Promise<Array<Message>>
    getMessages(chat:Chat)
}