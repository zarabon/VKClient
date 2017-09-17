<template>
<div class="dialog">
    <div class="dialog-header">

    </div>
    <div class="dialog-text">

    </div>

</div>
</template>

<script>
import Vue from "vue";
import Component from 'vue-class-component'

@Component({
    props: {
        dialogName: String,
        text:String,
        time:Number,
        img:String

    }
})

export default class DialogComponent extends Vue{


}

</script>

<style scoped>
.dialog-header{
    display: flex;
    justify-content: space-between;
}
</style>