<template>
  <p>{{ commText }}</p>
</template>

<script>
  export default {
    name: 'CommentTimer',
    props: ['timeComment'],
    data () {
      return {
        timeText: ''
      }
    },
    methods:{
      setTime: function () {
        var _isDateTime = new Date(this.timeComment);
        var nowTime = new Date();
        var isDateTime = {
          year: _isDateTime.getFullYear(),
          month: _isDateTime.getMonth(),
          day: _isDateTime.getDate(),
          hours: _isDateTime.getHours(),
          minute: _isDateTime.getMinutes()
        };
        var monthArr = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
        if (isDateTime.year !== nowTime.getFullYear()) {
          this.commText=`${isDateTime.day} ${monthArr[isDateTime.month]} ${isDateTime.year} в ${isDateTime.hours}:${isDateTime.minute}`;
          return;
        }
        if (isDateTime.month !== nowTime.getMonth()) {
          this.commText=`${isDateTime.day} ${monthArr[isDateTime.month]} в ${isDateTime.hours}:${isDateTime.minute}`;
          return;
        }
        if (isDateTime.day !== nowTime.getDate()) {
          if((isDateTime.day - nowTime.getDate()) === 1){
              this.commText=`Вчера в ${isDateTime.hours}:${isDateTime.minute}`;
          } else{
              this.commText=`${isDateTime.day} ${monthArr[isDateTime.month]} в ${isDateTime.hours}:${isDateTime.minute}`;
          }
          return;
        }
        if ((isDateTime.hours === nowTime.getHours()) && ((isDateTime.minute - nowTime.getMinutes()) < 10)) {
          this.commText = `Только что`;
        } else {
          this.commText = `${isDateTime.hours}:${isDateTime.minute}`;
        }
      }
    },
    watch: {
      'timeComment': {
        handler: function () {
          this.setTime();
        },
        immediate: true
      }
    }
  }
</script>

<style>
</style>
