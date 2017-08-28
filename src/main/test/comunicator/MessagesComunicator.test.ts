import {suite, test, slow, timeout} from 'mocha-typescript'
import {MessagesComunicator} from "../../VkClient/APIServerCominicator/MessagesComunicator/MessagesComunicator";
import {Message} from "../../VkClient/APIServerCominicator/MessagesComunicator/domain/Message";
import {ComunicatorSettings} from "../../VkClient/APIServerCominicator/CommunicatorSettings";
import {ChatMessage} from "../../VkClient/APIServerCominicator/MessagesComunicator/domain/ChatMessage";

const TOKEN = '1c04697eb3f53aab4e71687faaec9cccca9da5d8856dc3ae64beba645d93f1c8453bfc03f144ab3feb99a';

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
            messagesComunicator.getDialogs(4)
                .then(res => {
                    res.forEach(message=>{
                        let mes:ChatMessage = message as ChatMessage
                        console.log(mes);
                    })
                    resolve(true)
                })
                .catch(e=>console.log(e))
        })

    }
}