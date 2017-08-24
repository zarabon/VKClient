<template>
    <div>
        <app-header-component></app-header-component>
        <h1>Go to browser and then login to vk and approve  suggestion </h1>
        <h1>Copy URL from broser and insert to input</h1>
        <button @click="openBrowserLogin">Open browser</button>
        <input :disabled="isInputLocked" v-model="userlUrl" :placeholder="inputPlaceHolder" class="input-field"
               type="text" name="userURL">
        <div class="error-message" v-if="errorMessage!=''">{{errorMessage}}</div>
        <div v-if="userToken" class="token">Your token is : <p>{{userToken.token}}</p> proceeding</div>
    </div>
</template>

<script>
    import AppHeaderComponent from '../HeaderComponent/AppHeaderComponent.vue'
    import Component from 'vue-class-component'
    import Vue from 'vue'

    const ipc_render = require('electron').ipcRenderer

    @Component({
        props: {},
        components: {
            AppHeaderComponent
        },
        watch: {
            userlUrl: function (newVal) {
                let retObj = getTokenFromUrl.call(this, this.userlUrl)
                if (retObj.isOk) {
                    this.userToken = retObj
                    this.errorMessage = ''
                    this.isInputLocked = true
                }

            }
        }

    })

    export default class LoginPage extends Vue {

        isInputLocked = false

        inputPlaceHolder = "pass here URL from browser"

        userlUrl = ""

        /**@type {
                isOk: bool,
                token: string,
                expires_in: number,
                user_id: string
            }
         */
        userToken = false

        errorMessage = ''

        openBrowserLogin() {
            ipc_render.send('open-browser-login', 'login')
        }


    }
    /**@desc parse url inserted by user for getting token information
     * @param url:string
     * @returns {
                isOk: bool,
                token: string,
                expires_in: number,
                user_id: string
            }
     */
    function getTokenFromUrl(url) {
        let regExp = /#access_token=(\w+)&expires_in=(.*)&user_id=(.+)/g
        let regArr = regExp.exec(url);

        if (!regArr) {
            this.errorMessage = "Wrong input, repeat the same actions"
            return {
                isOk: false
            }
        }

        //check existing first group
        if (regArr.length !== 4) {
            this.errorMessage = "Wrong URL grouping, repeat the same actions "
            return {
                isOk: false
            }
        }

        return {
            isOk: true,
            token: regArr[1],
            expires_in: parseInt(regArr[2]),
            user_id: regArr[3]
        }
    }
</script>

<style>
    .input-field {
        width: 500px;
    }

    .error-message {
        font-size: 18px;
        color: red;
    }

    .token {
        font-size: 17px;
    }

    .token p {
        color: blue;
        font-size: 13px;
    }


</style>
