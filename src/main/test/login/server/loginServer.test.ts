import {suite, test, slow, timeout} from 'mocha-typescript'
import {LocalServer} from "../../../VkClient/login/server/LocalServer";

@suite()
export class LoginServerTest{
    private inst:LocalServer = new LocalServer

    @test
    public requestTest(){
        this.inst.startServer()
    }
}