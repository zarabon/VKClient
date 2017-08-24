
import {suite, test, slow, timeout, it} from 'mocha-typescript'
import {DIContainer} from "../../VkClient/DI/DIContainer"
import * as assert from "assert";
import {LocalServer} from "../../VkClient/LocalServer/LocalServer";

@suite
class DIContainerTest {

    @test
    setInstance() {
        let testObj = {test: 1337};
        let testObjName = "TestObj";
        DIContainer.setInstance(testObjName, testObj)
        assert.deepEqual(DIContainer.getInstance(testObjName), testObj)
    }

    @test
    getInstance() {
        // assert.throws(() => {
        //    DIContainer.getInstance("dhdh")
        // }, Error)
        // let serv = new LocalServer
        // let handlerFunc1 = function(){assert.deepEqual(DIContainer.getInstance("LocalServer"), serv)};
        // timeout(10)
        // setTimeout(()=>assert.deepEqual(DIContainer.getInstance("LocalServer"), serv))


    }
}