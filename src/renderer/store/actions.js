import {SET_LOGIN} from "./mutationsTypes";

/**
 *
 * @param commit
 * @param value boolean
 */
export const setLogged = ({commit},value)=>{
    commit(SET_LOGIN,value)
}
