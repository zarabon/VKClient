import {Token} from "../../LoginModule/domain/Token";
import {handleRespError} from "../responseErrorhandler";

const httpRequest = require('http_request');

const RIGHTS_CHECK_URL = 'https://api.vk.com/method/account.getAppPermissions?user_id='

export class TokenRightsCominicator {

    public async getPermissionMaskFromAPIServer(token: Token): Promise<number> {
        let url = RIGHTS_CHECK_URL + token.userId + `&access_token=${token.accessToken}`

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
}