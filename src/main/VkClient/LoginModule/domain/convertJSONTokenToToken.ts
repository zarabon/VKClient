/**
 * @param token - json from render process
 * @return {Token}
 * @return null if param not valid
 */
import {Token} from "./Token";

export function convertJSONTokenToToken(token): Token {
    //check if @param token has no fields accessToken and userId and return null
    if (!(('userId' in token) && ('accessToken' in token))) {
        return null
    }

    let retToken: Token = new Token(token['userId'], token['accessToken'])

    retToken.expireTime = 'expireTime' in token ? token['expireTime'] : null
    retToken.generationTime = 'generationTime' in token ? token['generationTime'] : null

    return retToken
}