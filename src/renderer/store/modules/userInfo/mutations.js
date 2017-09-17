import  Vue from "vue";
import {SET_TOKEN, SET_USER_ID} from "./mutationsTypes";

export default {
    [SET_TOKEN](state,token){
        Vue.set(state,'token',token)
    },

    [SET_USER_ID](state,userId){
        Vue.set(state,'userId',userId)
    }

}