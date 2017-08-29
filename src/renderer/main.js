import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'



let vue_isnt = new Vue({
    store,
    components: {App},
    router,
    axios,
    template: '<App/>'
}).$mount('#app')
/* eslint-disable no-new */

export default store