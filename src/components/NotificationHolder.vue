<template>
    <div class="">
        <button @click="show = !show">Nitifications</button>
        <div class="notifBlock" v-if="show">
            <ul>
                <Notification v-for="item in items" :item="item"></Notification>
            </ul>
            <button @click="addNotif">Open</button>
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
                show: true,
                items: '',
                endNotif: 6
            }
        },
        components:{
            Notification
        },
        methods:{
            addNotif(){
                this.endNotif+=6,
                this.items = this.notifItems.slice(0,this.endNotif)
            }
        },
        watch:{
            'notifItems':{
                handler: function () {
                    this.items = this.notifItems.slice(0,this.endNotif)
                },
                immediate: true
            }
        }
    }    
</script>

<style>
    *{
        margin: 20px;
    }
</style>