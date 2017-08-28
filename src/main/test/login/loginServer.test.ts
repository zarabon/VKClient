import {suite, test, slow, timeout} from 'mocha-typescript'
import {Token} from "../../VkClient/LoginModule/domain/Token";
import * as assert from "assert";
import {TokenRights} from "../../VkClient/LoginModule/TokenRights";
import loginingService from "../../VkClient/LoginModule/index";

const USER_ID = '83973489'
const TOKEN_PERMISSIONS_BITMASK = TokenRights.FRIENDS + TokenRights.GROUPS + TokenRights.MESSAGES
const TOKEN = '1c04697eb3f53aab4e71687faaec9cccca9da5d8856dc3ae64beba645d93f1c8453bfc03f144ab3feb99a';
const API_VERSION = '5.67'
@suite(timeout(5000))
export class LoginServerTest {

    @test
    checkPriviledges(): Promise<boolean> {
        return new Promise(resolve => {
            loginingService.checkTokenRights(
                new Token('83973489', TOKEN),
                [TokenRights.FRIENDS, TokenRights.GROUPS, TokenRights.MESSAGES])
                .then(value => {
                    console.error(value);
                    assert.ok(value)

                    let httpRequest = require('http_request')
                    httpRequest.request(`https://api.vk.com/method/account.getAppPermissions?user_id=${USER_ID}&access_token=${TOKEN}&v=${API_VERSION}`,{
                        method: 'POST'
                    })
                        .then(resp=>{
                            console.log(resp.getBody());
                            resolve(value)
                        })
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
            httpRequest.request(`https://api.vk.com/method/messages.getDialogs`, {
                method: 'GET',
                body:{
                    access_token:TOKEN
                }
            })
                .then(resp => {
                    //console.log(resp.getBody())
                    resolve(true)
                })
        })
    }
}