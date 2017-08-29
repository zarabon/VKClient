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
        <div v-if="loading" class="loading"><img id='loading-gif' src="static/tenor.gif" alt=""></div>
    </div>
</template>

<script>
    import AppHeaderComponent from '../HeaderComponent/AppHeaderComponent.vue'
    import Component from 'vue-class-component'
    import Vue from 'vue'
    import router from '../../router/index'
    import {ipcRenderer} from 'electron'
    import {mapState} from 'vuex'

    @Component({
        props: {},
        components: {
            AppHeaderComponent
        },
        watch: {
            userlUrl: function (newVal) {
                let tokenObj = parseURL.call(this, this.userlUrl)
                if (tokenObj.isOk) {
                    this.userToken = tokenObj
                    this.errorMessage = ''
                    this.isInputLocked = true
                    tokenSucessfulGot.call(this, tokenObj)
                }

            }
        },
        computed: {
            ...mapState({
                isLogged: state => state.isLogged
            })
        }

    })

    export default class LoginPage extends Vue {

        isInputLocked = false

        inputPlaceHolder = "pass here URL from browser"

        userlUrl = ""

        loading = false

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
            ipcRenderer.send('OPEN_BROWSER_LOGIN', null)
        }


    }

    /**@desc parse url inserted by user for getting token information
     * @private
     * @param url:string
     * @returns {
                isOk: bool,
                token: string,
                expires_in: number,
                user_id: string
            }
     */
    function parseURL(url) {
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

    /**
     * @desc call this function when got token from user and it will redirect to start page and save token info to the store
     * @param token
     * @private
     */
    function tokenSucessfulGot(tokenObj) {
        ipcRenderer.send('SAVE_TOKEN', {
            userId: tokenObj.user_id,
            accessToken: tokenObj.token
        })
        this.loading = true
        Vue.$data.is
        ipcRenderer.once('TOKEN_SAVED', () => {
            router.push('/')
        });
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

    .loading {
        top: 50%;
        left: 50%;
        position: absolute;
        margin-top: -150px;
        margin-left: -150px;

    }

    #loading-gif {
        height: 300px;
        width: 300px;
    }


</style>
