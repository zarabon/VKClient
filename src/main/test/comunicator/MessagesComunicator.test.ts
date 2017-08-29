import {suite, test, slow, timeout} from 'mocha-typescript'
import {MessagesComunicator} from "../../VkClient/APIServerCominicator/MessagesComunicator/MessagesComunicator";
import {Message} from "../../VkClient/APIServerCominicator/MessagesComunicator/domain/Message";
import {ComunicatorSettings} from "../../VkClient/APIServerCominicator/CommunicatorSettings";
import {ChatMessage} from "../../VkClient/APIServerCominicator/MessagesComunicator/domain/ChatMessage";

const TOKEN = '90eb770a8fbb307c2980988ff12baa713086104fc6970650785e4599b80e0a08bebcd6f4691f554bfa48e';

@suite(timeout(3000))
export class MessagesComunicatorTest{
    @test
    getDialogs(): Promise<boolean> {
        return new Promise((resolve,reject) => {
            let messagesComunicator:MessagesComunicator = new MessagesComunicator;
            let settings:ComunicatorSettings = new ComunicatorSettings
            settings.version = '5.68'
            settings.token = TOKEN
            messagesComunicator.setCommunicatorSettings(settings)
            messagesComunicator.getDialogs(20)
                .then(res => {
                    res.forEach(message=>{
                        let mes:ChatMessage = message as ChatMessage
                        console.log(JSON.stringify(mes) +"\n");
                    })
                    resolve(true)
                })
                .catch(e=>console.log(e))
        })
    }
}