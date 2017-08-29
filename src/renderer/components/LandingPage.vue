<template>
    <div>
        <app-header-component></app-header-component>

    </div>
</template>

<script>
    let AppHeaderComponent = require('./HeaderComponent/AppHeaderComponent.vue')
    import Component from 'vue-class-component'
    import Vue from 'vue'

    @Component({
        components: {
            AppHeaderComponent
        }
    })

    export default class LandingPage extends Vue{
    }
</script>

<style>
</style>
