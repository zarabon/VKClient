import {UserDataState,userDataReducer} from './reducers/UserDataReducers'
import {ReducersMapObject, Store} from "redux";
import {StoreBuilder} from "redux-ts";

export interface StoreState {
    userData: UserDataState
}

export const reducers: ReducersMapObject = {
    userData: userDataReducer
}

const store:Store<StoreState> = new StoreBuilder<StoreState>()
    .withReducersMap(reducers)
    .build()

export default store