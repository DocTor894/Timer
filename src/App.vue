<template>
    <div class="components">
        <TimeCounter :timeCount="timeCount"></TimeCounter>
        <CommentTimer :timeComment="timeComment"></CommentTimer>   
        <NotificationHolder :notifItems="notifItems"></NotificationHolder>
    </div>
</template>

<script>
    import TimeCounter from './timeCounter.vue'
    import CommentTimer from './CommentTimer.vue'
    import NotificationHolder from './NotificationHolder.vue'
    
    export default {
        name: 'timer',
        components:{
            TimeCounter,
            CommentTimer,
            NotificationHolder
        },
        data () {
            return {
                timeCount:"2017, 8, 20, 9, 30, 39",
                timeComment:"2017, 8, 20, 9, 30, 39",
                notifItems:[
                    {
                        isLooked: false,
                        title: 'Ответ на комменарий',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'event',
                        datetime: "2017, 8, 20, 9, 30, 39"
                    },
                    {
                        isLooked: true,
                        title: 'Ответ на комменарий',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'event',
                        datetime: "2017, 8, 20, 9, 30, 39"
                    }
                ]
            }
        },        
    }    
</script>

<style>
    
</style>
