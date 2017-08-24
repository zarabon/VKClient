import {Token} from "../../LoginModule/TokenRightsChecker/domain/Token";
import {ReducerBuilder} from "redux-ts";
import {SetLogged, SetToken} from "../actions/UserDataActions";

export interface UserDataState {
    token?: Token,
    userId?: string,
    userName?: string,
    userSurname?: string,
    isLogged: boolean
}

export const userDataReducer = new ReducerBuilder<UserDataState>()
    .init({isLogged: false})//init state of this part of the store
    //TODO вынести повторяющийся код в одну функцию
    .handle(SetToken, (state, action) => {
        if (action.token != null) {
            let tempState = {...state};//copy state, not deep
            if ('token' in state) {
                delete tempState['token'] //deleting prop
            }
            return {
                token: action.token,
                ...tempState
            }
        }

        return state
    })

    .handle(SetLogged, (state, action) => {
        if (action.isLogged != null) {
            let tempState = {...state};//copy state, not deep
            if ('isLogged' in state) {
                delete tempState['isLogged'] //deleting prop
            }
            return {
                isLogged: action.isLogged,
                ...tempState
            }
        }

        return state
    })

    .build()