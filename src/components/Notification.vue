<template>
  <li v-if="item.isLooked" :class="item.category" class="item">
    <p class="time">{{item.datetime}}</p>
    <h3 class="title">{{item.title}}</h3>
    <p class="description">{{item.text}}</p>
    <i class="material-icons" @click="deleteNotif(index)">delete</i>
  </li>
</template>

<script>
  export default {
    props:['item', 'index'],
    name: 'notification',
    data () {
      return {
      }
    },
    methods:{
      deleteNotif(index){
        this.$emit("deleteItem",index)
      }
    }
  }
</script>

<style scoped lang="less">
  @colorError: #C53A3A;
  @colorSuccess: #79BD8F;
  @colorWarning : #F6EA58;
  @colorEvent: #111524;
  @colorWhite: #fff;

  li.item{
    position: relative;
    color: @colorWhite;
    list-style-type: none;
    padding: 10px;
    margin-bottom: 5px;

    &:last-child{
      margin-bottom: 0;
    }

    h3.title{
      margin: 0;
    }

    p{
      &.time{
        margin: 5px 0;
        position: absolute;
        top: 5px;
        right: 10px;
      }

      &.description{
        margin: 5px 0;
      }
    }

    &.error{
      background: @colorError;
    }

    &.success{
      background: @colorSuccess;
    }

    &.warning{
      background: @colorWarning;
    }

    &.event{
      background: @colorEvent;
    }

    i.material-icons{
      cursor: pointer;
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }
</style>
