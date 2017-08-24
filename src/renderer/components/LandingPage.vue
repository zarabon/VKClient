<template>
    <div>
        <app-header-component></app-header-component>
        <p>{{test}}</p>
    </div>
</template>

<script>
    let AppHeaderComponent = require('./HeaderComponent/AppHeaderComponent.vue')
    import Component from 'vue-class-component'
    import Vue from 'vue'

    const ipc = require('electron').ipcRenderer
    const reply = ipc.sendSync('synchronous-message', 'ping')

    @Component({
        components: {
            AppHeaderComponent
        }
    })

    export default class LandingPage extends Vue{
        test = reply
    }
</script>

<style>
</style>
