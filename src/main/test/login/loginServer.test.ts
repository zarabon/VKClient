import {suite, test, slow, timeout} from 'mocha-typescript'
import {TokenRightsChecker} from "../../VkClient/APIServerCominicator/TokenRightsChecker/TokenRightsChecker";
import {Token} from "../../VkClient/APIServerCominicator/TokenRightsChecker/domain/Token";
import * as assert from "assert";
import {TokenRights} from "../../VkClient/APIServerCominicator/TokenRightsChecker/TokenRights";

@suite(timeout(10000))
export class LoginServerTest {
    @test
    public requestTest(): Promise<boolean> {


        return new Promise(resolve => {
            let t: TokenRightsChecker = new TokenRightsChecker
            let checked = t.checkTokenRights(new Token('83973489', '27114a102c744ef7fc150dbcc30f4e207a56539e1e28a2520d3c2eee60523f1cf15f22cd49617a7e4b2b9'),[TokenRights.MESSAGES])
            checked.then(value => {
                console.error(value)
                resolve(value)
            })
        })
    }

    @test
    public requestTest2(): Promise<boolean> {
        return new Promise(resolve => {
            let httpRequest = require('http_request')
            httpRequest.request(`https://api.vk.com/method/messages.getDialogs?count=1&access_token=27114a102c744ef7fc150dbcc30f4e207a56539e1e28a2520d3c2eee60523f1cf15f22cd49617a7e4b2b9`,{
                method:'POST'
            })
                .then(resp => {
                    console.log(resp.getBody())
                    resolve(true)
                })
        })
    }
}