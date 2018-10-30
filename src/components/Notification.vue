<template>
  <li v-if="item.isLooked" :key="item" :class="item.category">
    <p class="time">{{item.datetime}}</p>
    <h3>{{item.title}}</h3>
    <p class="description">{{item.text}}</p>
    <img class="trash" src="../assets/trash.svg" alt="">
  </li>
</template>

<script>
    export default {
        props:['item'],
        name: 'notification',
        data () {
            return {                
            }
        }
    }    
</script>

<style scoped lang="less">
  @error: #C53A3A;
  @success: #79BD8F;
  @warning : #F6EA58;
  @event: #111524;
  @white: #fff;

  .error{
    background: @error;
  }

  .success{
    background: @success;
  }

  .warning{
    background: @warning;
  }

  .event{
    background: @event;
  }

  li{
    color: @white;
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

    img.trash{

    }
  }
</style>
