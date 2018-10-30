<template>
    <div class="notifHolder">
        <button @click="show = !show">Nitifications</button>
        <transition name="holder">
            <div class="notifBlock" v-if="show">
                <ul>
                    <Notification v-for="item in items" :item="item" :key="item"></Notification>
                </ul>
                <input type="submit" value="Показать еще" @click="addNotif"></input>
            </div>
        </transition>
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

<style scoped lang="less">
    @back: rgba(10,11,19,.7);
    @white: #fff;

    .notifBlock{
      width: 500px;
      background: @back;

      ul{
        padding: 5px;
        margin: 0;
      }

      input{
        cursor: pointer;
        font-size: 16px;
        width: 100%;
        height: 40px;
        background: @back;
        color: @white;
        border-style: none;
        border-top: 1px solid #000;
      }
    }

    .holder-enter-active, .holder-leave-active{
        transition: opacity .5s;
    }
    .holder-enter, .holder-leave-to{
        opacity: 0;
    }
</style>
