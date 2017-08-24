<template>
    <div class="appHeaderComponent">
        <div class="appName">VKClient</div>
        <div class="userInfo" @click="login">
            <div v-if="isLogin">{userName}</div>
            <div class="" v-else>Log in</div>
            <div><img src="static/ic_launcher.png" alt="test img" height="50px" width="70px"></div>
        </div>
    </div>

</template>

<script>
    import Component from 'vue-class-component'
    import Vue from 'vue'
    import router from '../../router/index'

    @Component({})
    export default class AppHeaderComponent extends Vue{
        isLogin = false

        login() {
            router.push("/login")
        }
    }
</script>

<style>
    .appHeaderComponent{
        height: 70px;
        background-color: #00B7FF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: auto;
    }

    .userInfo {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .userInfo:hover{
        background-color: #c3d9ff;
        cursor: default;
    }

    .appName{
        padding-left: 30px;
    }
</style>
