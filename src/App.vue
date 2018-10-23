<template>
    <timeCounter timeCount="timeCount"></timeCounter>
</template>

<script>
    import timeCounter from './timeCounter.vue'
    
    export default {
        name: 'timer',
        data () {
            return {
                timeCount:'2017, 8, 20, 9, 30, 39'
            }
        },
        components:{
            timeCounter
        }
    }
    
</script>

<style>
    
</style>
