import {Token} from "./TokenRightsChecker/domain/Token";
import {handleRespError} from "./ResponseErrorhandler";

const MESSAGES_CHECK_URL: string = `https://api.vk.com/method/messages.getDialogs?count=1`
const httpRequest = require('http_request');

export class MessagesRequester {

    public async testMessagesRights(token:Token): Promise<boolean> {
        let resp;
        let url = MESSAGES_CHECK_URL + `&access_token=${token.access_token}`
        try {
            resp = await httpRequest.request(url, {
                method: 'POST'
            });
        } catch (e) {
            //TODO wrap error into custom
            throw e;
        }

        let respBody = resp.getBody();
        handleRespError(respBody)

        return true

    }

}