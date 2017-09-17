import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'

Vue.use(require('vue-electron'))

let vue_isnt = new Vue({
    components: {App},
    store,
    router,
    axios,
    template: '<App/>'
})

// /**
//  * Setting $store in every component, it's not initializing by default in Vue.
//  * I don't have a clue why Vue doesn't do it, but this code aimed to fix that.
//  * Binding
//  */
// let vueStore = vue_isnt.$store;
//
//
//
// /**
//  * @desc set store to child components recursively
//  * @param component
//  * @param store
//  */
// function setStore(component,store) {
//
//     Vue.set(component,'$store',store)
//
//     for (let child of component.$children){
//         console.log(component,"setting store of ");
//         setStore(child,store)
//     }
// }
//
 vue_isnt.$mount('#app')
 console.log(vue_isnt);
// /* eslint-disable no-new */
//
