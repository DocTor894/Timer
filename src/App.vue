<template>
    <div class="components">        
<!--
        <TimeCounter :timeCount="timeCount"></TimeCounter>
        <CommentTimer :timeComment="timeComment"></CommentTimer>
        <button @click="show = !show">Nitifications</button>
        <NotificationHolder :show="show" :notifItems="notifItems"></NotificationHolder>
        <CustomCheckbox v-model="state" :size="sizeCheck"></CustomCheckbox>
        <CustomButton @clickBtn="clickBtn" :size="sizeBtn" :icon="iconBtn">Добавить</CustomButton>
        <Spoiler :side="side" :spoilerItems="spoilerItems"></Spoiler>
        
        <button @click="addMessage">Add message</button>
        <button @click="addMessage2">Add message2</button>
        <notify-messages :messages="messages" ref="notifyMessages"></notify-messages>
-->
        <ProgressBar :maxProgress="maxProgress" :loadProcess="loadProcess"></ProgressBar>
    </div>
</template>

<script>
    //  import TimeCounter from './components/TimeCounter.vue';
    //  import CommentTimer from './components/CommentTimer.vue';
    //  import NotificationHolder from './components/NotificationHolder.vue';
    //  import CustomCheckbox from './components/CustomCheckbox.vue';
    //  import CustomButton from './components/CustomButton.vue';
    //  import Spoiler from './components/Spoiler.vue';
    //  import NotifyMessages from "./components/NotifyMessages";
    import ProgressBar from './components/ProgressBar.vue';

    export default {
        name: 'timer',
        components: {
    //      NotifyMessages,
    //      TimeCounter,
    //      CommentTimer,
    //      NotificationHolder,
    //      CustomCheckbox,
    //      CustomButton,
    //      Spoiler,
            ProgressBar
        },
        data() {
            return {
                maxProgress: 5,
                loadProcess: 2,
                messages: [],
                side: 'left',
                spoilerItems: [
                    {
                        text: 'Hello'
                    },
                    {
                        text: 'World!'
                    }
                ],
                iconBtn: 'done',
                sizeBtn: 'big',
                sizeCheck: 'big',
                state: '',
                show: false,
                timeCount: "2017, 8, 20, 9, 30, 39",
                timeComment: "2017, 8, 20, 9, 30, 39",
                notifItems: [
                    {
                        isLooked: true,
                        title: 'Заголовок',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'event',
                        datetime: "2017, 8, 20, 9, 30, 39"
                    },
                    {
                        isLooked: true,
                        title: '2',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'error',
                        datetime: "2017, 8, 20, 9, 30, 39"
                    },
                    {
                        isLooked: true,
                        title: '3',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'warning',
                        datetime: "2017, 8, 20, 9, 30, 39"
                    },
                    {
                        isLooked: true,
                        title: '4',
                        text: 'Пользователь с ником reznikov ответил на ваш комментарий',
                        category: 'success',
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
                    }
                ]
            }
        },
        methods: {
            addMessage: function () {
                this.$refs.notifyMessages.addMessage({
                    name: 'Новое достижение!',
                    type: 'event',
                    title: 'Любитель',
                    content: 'Просмотреть все серии',
                });
            },
            addMessage2: function () {
                this.$refs.notifyMessages.addMessage({
                    name: 'Новое достижение2!',
                    type: 'error',
                    title: 'Любитель2',
                    content: 'Просмотреть все серии2',
                });
            },
        }
    }
</script>

<style>

</style>
