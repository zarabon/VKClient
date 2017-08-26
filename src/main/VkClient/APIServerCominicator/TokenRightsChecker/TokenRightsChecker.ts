import {TokenRights} from "./TokenRights";
import {Token} from "./domain/Token";
import {handleRespError} from "../responseErrorhandler";

const httpRequest = require('http_request');

const RIGHTS_CHECK_URL = 'https://api.vk.com/method/account.getAppPermissions?user_id='

export class TokenRightsChecker {

    public async checkTokenRights(token: Token, rights: Array<TokenRights>): Promise<boolean> {

        let bitMask = await this.getPermissionMaskFromAPIServer(token)

        let computeRightsMask = rights.reduce((sum, right) => {
            return sum + right
        }, 0)

        //checking using bitmask if app have enough privileges
        return (bitMask & computeRightsMask ) === computeRightsMask
    }

    private async getPermissionMaskFromAPIServer(token: Token): Promise<number> {
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