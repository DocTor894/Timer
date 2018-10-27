<template>
    <div class="components">
        <TimeCounter :timeCount="timeCount"></TimeCounter>
        <CommentTimer :timeComment="timeComment"></CommentTimer>
        <NotificationHolder :notifItems="notifItems"></NotificationHolder>
    </div>
</template>

<script>
    import TimeCounter from './components/timeCounter.vue';
    import CommentTimer from './components/CommentTimer.vue';
    import NotificationHolder from './components/NotificationHolder.vue';

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
                        isLooked: true,
                        title: '1',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'event',
                        datetime: "2017, 8, 20, 9, 30, 39"
                    },
                    {
                        isLooked: true,
                        title: '2',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'event',
                        datetime: "2017, 8, 20, 9, 30, 39"
                    },
                    {
                        isLooked: true,
                        title: '3',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'event',
                        datetime: "2017, 8, 20, 9, 30, 39"
                    },
                    {
                        isLooked: true,
                        title: '4',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'event',
                        datetime: "2017, 8, 20, 9, 30, 39"
                    },
                    {
                        isLooked: true,
                        title: '5',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'event',
                        datetime: "2017, 8, 20, 9, 30, 39"
                    },
                    {
                        isLooked: true,
                        title: '6',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'event',
                        datetime: "2017, 8, 20, 9, 30, 39"
                    },
                    {
                        isLooked: true,
                        title: '7',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'event',
                        datetime: "2017, 8, 20, 9, 30, 39"
                    },
                    {
                        isLooked: true,
                        title: '8',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'event',
                        datetime: "2017, 8, 20, 9, 30, 39"
                    },
                    {
                        isLooked: true,
                        title: '6',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'event',
                        datetime: "2017, 8, 20, 9, 30, 39"
                    },
                    {
                        isLooked: true,
                        title: '7',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'event',
                        datetime: "2017, 8, 20, 9, 30, 39"
                    },
                    {
                        isLooked: true,
                        title: '8',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'event',
                        datetime: "2017, 8, 20, 9, 30, 39"
                    },
                    {
                        isLooked: true,
                        title: '6',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'event',
                        datetime: "2017, 8, 20, 9, 30, 39"
                    },
                    {
                        isLooked: true,
                        title: '7',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'event',
                        datetime: "2017, 8, 20, 9, 30, 39"
                    },
                    {
                        isLooked: true,
                        title: '8',
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
