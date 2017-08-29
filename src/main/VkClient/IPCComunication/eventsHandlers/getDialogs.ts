import loginingService from "../../LoginModule/index";
import chatCore from "../../ChatModule/index";
import {mainProcEventEmitter} from "../index";
import {MainEvents} from "../events/MainEvents";
import {Message} from "../../APIServerCominicator/MessagesComunicator/domain/Message";

export function getDialogs(obj){
    chatCore.getDialogs(obj['count']).then(dialogs => {
        let respDialogs:Array<Message>  = dialogs as Array<Message>

        mainProcEventEmitter.emitEvent(MainEvents.DIALOGS,dialogs)
    })
        .catch(reason => {
            mainProcEventEmitter.emitEvent(MainEvents.ERROR,reason)
        })
}