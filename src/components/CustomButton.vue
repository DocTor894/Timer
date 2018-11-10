<template>
  <div class="customBtn" :class="size" @click="clickBtn">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CustomCheckbox",
    data(){
      return{
      }
    },
    model: {
      prop: 'state',
      event: 'change'
    },
    props: {
      state: Boolean,
      size: ''
    },
    methods:{
      clickBtn(){
        this.$emit("eventBtn")
      }
    }
  }
</script>

<style scoped lang="less">
  .customBtn{
    p{
      color: #fff;
      height: 24px;
      padding: 3px;
      cursor: pointer;
      background: #79BD8F;
      display: inline-block;
      font-size: 20px;

      i{
        font-size: 16px;
      }
    }

    &.small{
      p{
        height: 16px;
        font-size: 15px;

        i{
          font-size: 12px;
        }
      }
    }

    &.big{
      p{
        height: 30px;
        font-size: 26px;

        i{
          font-size: 18px;
        }
      }
    }
  }
</style>
