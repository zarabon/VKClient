import {ChatCore} from './ChatCore'
import {Message} from "../APIServerCominicator/MessagesComunicator/domain/Message";
import messageComunicator from "../APIServerCominicator/MessagesComunicator/index";

const DEFAULT_DIALOGS_COUNT = 50

export class ChatCoreImpl implements ChatCore{
    getDialogs(count?:number):Promise<Array<Message>>{
        return messageComunicator.getDialogs(count == null? DEFAULT_DIALOGS_COUNT : count)
    }

    getMessages(){
        return null
    }
}