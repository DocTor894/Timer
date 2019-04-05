<template>
    <div class="message__holder">
        <ul class="message__items">
            <div class="message__item" v-for="(item, index) in items">
                <p class="message__name">{{item.name}}</p>
                <p class="message__title">{{item.title}}</p>
                <p class="message__content">{{item.content}}</p>
                <div class="message__close" @click="deleteItem(index)">
                    <i class="material-icons">
                        close
                    </i>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>    
    export default {
        name: "Message",
        props:['message'],
        data () {
            return {                
                items:''
            }
        },
        methods:{
            deleteItem(index){
                this.items = this.message.splice(index, 1)
            }
        },
        watch:{
            'message':{
                handler: function () {
                  this.items = this.message.slice(0,this.message.length)
                },
                immediate: true
            }
        }
    }
</script>

<style scoped lang="less">
    .message__items{
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 10px;
        left: 10px;
        
        .message__item{
            display: flex;
            width: 360px;
            height: 110px;
            background: rgba(31,31,39,.8);            
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 10px;
            position: relative;
            flex-direction: column;
            justify-content: space-around;
            animation: messageEnter 1s forwards;
            
            &:last-child{
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
    
/*
    .message-enter-active{
        animation: messageEnter 1s;
    }
*/

    @keyframes messageEnter{
        0%{left: -40px}
        100%{left: 0px}
    }
    
    
</style>
