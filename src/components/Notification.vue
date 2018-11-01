<template>
  <li v-if="item.isLooked" :class="item.category">
    <p class="time">{{item.datetime}}</p>
    <h3>{{item.title}}</h3>
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

  li{
    position: relative;
    color: @colorWhite;
    list-style-type: none;
    padding: 10px;
    margin-bottom: 5px;

    &:last-child{
      margin-bottom: 0;
    }

    h3{
      margin: 0;
    }

    p{
      margin: 5px 0;
      &.time{
        margin: 0;
        float: right;
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

    i{
      cursor: pointer;
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }
</style>
