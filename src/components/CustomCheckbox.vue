<template>
  <div :class="size" class="checkbox" @click="$emit('change', !state)">
    <i v-if="state" class="material-icons" :class="size">
      done
    </i>
    <i v-else class="material-icons" :class="size">
      crop_square
    </i>
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
    }
  }
</script>

<style scoped lang="less">
  .checkbox{
    cursor: pointer;
    width: 24px;
    height: 24px;
    color: white;
    text-align: center;
    background: #79BD8F;

    &.big{
      width: 32px;
      height: 32px;

      & i{
        font-size: 32px;
      }
    }

    &.small{
      width: 16px;
      height: 16px;

      & i{
        font-size: 16px;
      }
    }
  }
</style>
