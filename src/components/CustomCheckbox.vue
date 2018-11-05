<template>
  <div class="checkbox">
    <p
      @click="$emit('change', !state)"
    >{{state}}</p>
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
      state: Boolean
    }
  }
</script>

<style scoped lang="less">
  .checkbox{
    font-size: 21px;
    width: 60px;
    height: 30px;
    color: white;
    text-align: center;
    background: #79BD8F;
  }
</style>
