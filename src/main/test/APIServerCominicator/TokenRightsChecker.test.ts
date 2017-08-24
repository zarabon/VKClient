import {suite, test, slow, timeout} from 'mocha-typescript'
import tokenRightsChecker from "../../VkClient/APIServerCominicator/TokenRightsChecker/index";
import {TokenRights} from "../../VkClient/APIServerCominicator/TokenRightsChecker/TokenRights";
import {Token} from "../../VkClient/APIServerCominicator/TokenRightsChecker/domain/Token";
import * as assert from "assert";

@suite(timeout(5000))
export class TokenRightsCheckerTest{

    @test
    checkPriviledges():Promise<boolean>{
        const TOKEN_PERMISSIONS_BITMASK = TokenRights.FRIENDS + TokenRights.GROUPS + TokenRights.MESSAGES

        return new Promise(resolve => {
            tokenRightsChecker.checkTokenRights(
                new Token('83973489','b3c299d233752fb3dd1394ec75c6f84ad61bbe2424849c377365072340dad2c3eb24cf8642ef282971589'),
                [TokenRights.FRIENDS,TokenRights.GROUPS,TokenRights.MESSAGES])
                .then(value => {
                    console.error(value);
                    assert.ok(value)
                    resolve(value)
                })
                .catch(e=>{
                    console.log(e);
                })
        })

    }
}