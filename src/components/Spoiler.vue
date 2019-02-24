<template>
  <div class="spoiler__holder">
    <nav class="spoiler__nav"
     v-bind:class="{ spoiler__nav__active: isActive }">
      <CustomCheckbox v-model="state" :size="sizeCheck"></CustomCheckbox>
      <CustomCheckbox v-model="state" :size="sizeCheck"></CustomCheckbox>
    </nav>
    <a href="#" class="spoiler__btn" @click="isActive = !isActive">
      <span>Open</span>
    </a>
  </div>
</template>

<script>
  import CustomCheckbox from './CustomCheckbox';

  export default {
    name: "Spoiler",
    components:{
      CustomCheckbox,
    },
    data(){
      return{
        isActive: false,
        sizeCheck: 'big',
        state: '',
      }
    }
  }
</script>

<style scoped lang="less">
    .spoiler__holder {
        display: flex;
        justify-content: center;
        align-items: center;

        .spoiler__nav{
            display: flex;
            justify-content: center;
            align-items: center;

            transition: 0.5s;
            transform-origin: right center;
            transform: scaleX(0) translateX(20%);
            opacity: 0;

            .checkbox{
                margin-right: 20px;
            }
        }

        .spoiler__nav__active{
            transform: scaleX(1) translateX(0%);
            opacity: 1;
        }
    }
</style>
