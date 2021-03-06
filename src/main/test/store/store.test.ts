import {suite, test, slow, timeout} from 'mocha-typescript'
import store from "../../VkClient/Store/index";
import {SetLogged, SetToken} from "../../VkClient/Store/actions/UserDataActions";
import {Token} from "../../VkClient/LoginModule/domain/Token";
import * as assert from "assert";
import {TokenRights} from "../../VkClient/LoginModule/TokenRights";


@suite(timeout(10000))
export class StoreTest {
    @test
    public requestTest() {
        store.dispatch(new SetToken(new Token('id','token')))
        store.dispatch(new SetToken(new Token('id','token2')))
        store.dispatch(new SetLogged(true))
        assert.ok(store.getState().userData.token.accessToken == 'token2')
        assert.ok(store.getState().userData.isLogged)
    }
}