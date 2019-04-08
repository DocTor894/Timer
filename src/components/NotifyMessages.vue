<template>
    <div class="message__holder">
<!--        <div class="message__items">-->
            <transition-group name="fade" tag="div" class="message__items">
                <div class="message__item" :key="index" v-for="(item, index) in messages">
                    <p class="message__name">{{item.name}}</p>
                    <p class="message__title">{{item.title}}</p>
                    <p class="message__content">{{item.content}}</p>
                    <div class="message__close" @click="deleteItem(index)">
                        <i class="material-icons">
                            close
                        </i>
                    </div>
                </div>
            </transition-group>
<!--        </div>-->
    </div>
</template>

<script>    
    export default {
        name: "NotifyMessages",
        props:['messages'],
        data () {
            return {                
                timer: [],
                timeToRemove: 10000 //10ms
            }
        },
        methods:{
            deleteItem: function (index) {
                this.messages = this.messages.splice(index, 1)
            },
            startTimeoutToRemove: function (item) {
                this.timer.push(setTimeout( () => {
                    if (this.messages.length > 0) {
                        this.messages.splice(this.messages.indexOf(item), 1);
                        this.timer.splice(0,1);
                    }
                }, this.timeToRemove));
            },
            addMessage: function (item) {
                this.messages.push(item);
                this.startTimeoutToRemove(item);
            }
        },
        watch:{
            'messages':{
                handler: function () {

                },
                immediate: true
            }
        }
    }
</script>

<style scoped lang="less">

    .fade-enter-active {
        transform: translateX(-100px);
        opacity: 0;
    }

    .fade-leave-active {
        opacity: 0;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        transition: 0.3s;
    }

    .message__items{
        display: flex;
        flex-direction: column-reverse;
        position: absolute;
        bottom: 10px;
        left: 10px;
        
        .message__item{
            display: flex;
            width: 360px;
            height: 110px;
            background: rgba(31, 31, 39, 0.8);
            padding: 20px;
            margin-bottom: 10px;
            position: relative;
            flex-direction: column;
            justify-content: space-around;
            transition: 0.3s;
            
            &:first-child{
                margin-bottom: 0;
            }
            
            .message__name{
                font-size: 20px;
                font-weight: 600;
            }
            
            .message__title{
                font-size: 18px;
            }

            .message__close{
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;
            }

        }
    }
    
</style>
