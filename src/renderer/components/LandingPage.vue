<template>
    <div>{{test}}</div>

</template>

<script>
    const ipc = require('electron').ipcRenderer
    const reply = ipc.sendSync('synchronous-message', 'ping')
 export default {
    data:function () {
        return{
            test:reply
        }
    }
  }
</script>

<style>
</style>
