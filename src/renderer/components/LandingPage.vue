<template>
    <div>
        <app-header-component></app-header-component>
        <chat-component></chat-component>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    import AppHeaderComponent from './HeaderComponent/AppHeaderComponent.vue'
    import ChatComponent from './ChatComponent/ChatComponent.vue'
    import Component from 'vue-class-component'
    import Vue from 'vue'

    @Component({
        components: {
            AppHeaderComponent,
            ChatComponent
        }
    })

    export default class LandingPage extends Vue {
    }
</script>

<style>
</style>
