<template>
  <div class="components">
    <TimeCounter :timeCount="timeCount"></TimeCounter>
    <CommentTimer :timeComment="timeComment"></CommentTimer>
    <button @click="show = !show">Nitifications</button>
    <NotificationHolder :show="show" :notifItems="notifItems"></NotificationHolder>
    <CustomCheckbox :checkResoults="checkResoults"></CustomCheckbox>
  </div>
</template>

<script>
  import TimeCounter from './components/TimeCounter.vue';
  import CommentTimer from './components/CommentTimer.vue';
  import NotificationHolder from './components/NotificationHolder.vue';
  import CustomCheckbox from './components/CustomCheckbox';

  export default {
    name: 'timer',
    components:{
      TimeCounter,
      CommentTimer,
      NotificationHolder,
      CustomCheckbox
    },
    data () {
      return {
        show: false,
        timeCount:"2017, 8, 20, 9, 30, 39",
        timeComment:"2017, 8, 20, 9, 30, 39",
        notifItems:[
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
        ],
        checkResoults:['Hello']
      }
    }
  }
</script>

<style>

</style>
