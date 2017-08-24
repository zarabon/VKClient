import { SyncAction, AsyncAction } from 'redux-ts'
import {Token} from "../../APIServerCominicator/TokenRightsChecker/domain/Token";

export class SetToken extends SyncAction {
    constructor(public token: Token) {
        super()
    }
}

export class SetLogged extends SyncAction {
    constructor(public isLogged: boolean) {
        super()
    }
}