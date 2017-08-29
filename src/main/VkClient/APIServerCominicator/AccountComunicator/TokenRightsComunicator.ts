import {Token} from "../../LoginModule/domain/Token";
import {handleRespError} from "../responseErrorhandler";
import {Comunicator} from "../Comunicator";
import {ComunicatorSettings} from "../CommunicatorSettings";

const httpRequest = require('http_request');

const RIGHTS_CHECK_URL = 'https://api.vk.com/method/account.getAppPermissions?user_id='

export class TokenRightsCominicator implements Comunicator{
    private communicatorSettings: ComunicatorSettings = new ComunicatorSettings;

    public async getPermissionMask(userId:string, access_token:string): Promise<number>  {
        let url = RIGHTS_CHECK_URL + userId + `&access_token=${ access_token}`

        let resp
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

        return respBody.response
    }

    setCommunicatorSettings(settings: ComunicatorSettings) {
        this.communicatorSettings = settings
    }

    getCommunicatorSettings(): ComunicatorSettings {
        return this.communicatorSettings
    }
}