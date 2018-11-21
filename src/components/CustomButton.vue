<template>
  <div class="customBtn" :class="size" @click="clickBtn">
    <i class="material-icons">
      {{icon}}
    </i>
    <p><slot></slot></p>
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
      size: '',
      icon: ''
    },
    methods:{
      clickBtn(){
        this.$emit("eventBtn")
      }
    }
  }
</script>

<style scoped lang="less">
  @green: #79BD8F;

  .customBtn{
    border: 1px solid @green;
    cursor: pointer;
    background: @green;
    height: 24px;
    color: #fff;
    font-size: 20px;
    display: inline-block;
    padding: 4px;

    p{
      margin: 0;
      display: inline-block;
    }

    &:hover {
      border: 1px solid @green;
      background: white;
      color: @green;
    }

    i{
      font-size: 16px;
    }

    &.small{
      height: 26px;
      padding: 0;
      p{
        font-size: 15px;
        margin: 0;
        display: inline-block;
      }
      i{
        font-size: 12px;
      }
    }

    &.big{
      height: 30px;
      padding: 4px;
      p{
        font-size: 26px;
        margin: 0;
        display: inline-block;
      }
      i{
        font-size: 18px;
      }
    }
  }
</style>
