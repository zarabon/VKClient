import {SET_LOGIN} from "./mutationsTypes";
import  Vue from "vue";

export default {
    [SET_LOGIN](state, {isLogged}){
        Vue.set(state,'isLogged', isLogged)
    }
}