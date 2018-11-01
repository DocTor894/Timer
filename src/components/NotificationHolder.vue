<template>
    <div class="notifHolder">
        <button @click="show = !show">Nitifications</button>
        <transition name="holder">
            <div class="notifBlock" v-if="show">
                <ul class="scroll">
                    <Notification
                      v-for="(item, index) in items"
                      :item="item"
                      :index="index"
                      @deleteItem="deleteItem"
                    ></Notification>
                </ul>
                <input type="submit" value="Показать еще" @click="addNotif" v-if="notifItems.length>6">
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
          },
          deleteItem(index){
            this.items = this.notifItems.splice(index, 1)
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
    @colorNotifHolderBack: rgba(10,11,19,.7);
    @colorWhite: #fff;

    .notifBlock{
      width: 500px;
      background: @colorNotifHolderBack;

      ul{
        padding: 5px;
        margin: 0;

        &.scroll{
          overflow-y: scroll;
          height: 445px;
        }
      }

      input{
        cursor: pointer;
        font-size: 16px;
        width: 100%;
        height: 40px;
        background: @colorNotifHolderBack;
        color: @colorWhite;
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
