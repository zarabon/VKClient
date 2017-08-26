import {suite, test, slow, timeout} from 'mocha-typescript'
import {Token} from "../../VkClient/LoginModule/domain/Token";
import * as assert from "assert";
import {TokenRights} from "../../VkClient/LoginModule/TokenRights";
import loginingService from "../../VkClient/LoginModule/index";

@suite(timeout(10000))
export class LoginServerTest {
    @test
    checkPriviledges(): Promise<boolean> {
        const TOKEN_PERMISSIONS_BITMASK = TokenRights.FRIENDS + TokenRights.GROUPS + TokenRights.MESSAGES

        return new Promise(resolve => {
            loginingService.checkTokenRights(
                new Token('83973489', 'a9820027b2c6d0d3d457a9e91004fe25e5593f9183f7028130a3a9028ad66324eb3cd669396726fc15469'),
                [TokenRights.FRIENDS, TokenRights.GROUPS, TokenRights.MESSAGES])
                .then(value => {
                    console.error(value);
                    assert.ok(value)
                    resolve(value)
                })
                .catch(e => {
                    console.log(e);
                })
        })

    }

    @test
    public requestTest2(): Promise<boolean> {
        return new Promise(resolve => {
            let httpRequest = require('http_request')
            httpRequest.request(`https://api.vk.com/method/messages.getDialogs?count=1&access_token=27114a102c744ef7fc150dbcc30f4e207a56539e1e28a2520d3c2eee60523f1cf15f22cd49617a7e4b2b9`, {
                method: 'POST'
            })
                .then(resp => {
                    console.log(resp.getBody())
                    resolve(true)
                })
        })
    }
}