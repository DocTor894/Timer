<template>
    <div class="">
        <button @click="show = !show">Nitifications</button>
        <div class="notifBlock" v-if="show">
            <ul>
                <Notification v-for="item in notifItems" :item="item"></Notification>
            </ul>
        </div>
    </div>
</template>

<script>
    import Notification from './Notification.vue'
    
    export default {
        props:['notifItems'],
        name: 'notifHolder',
        data () {
            return {
                show: true
            }
        },
        components:{
            Notification
        }
    }    
</script>