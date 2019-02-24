<template>
    <div class="spoiler__holder">
        <transition>
            <nav class="spoiler__nav"
                 v-if="isActive"
                 :key="isActive"
                 v-bind:class="{ spoiler__nav__active: isActive }">
                <CustomCheckbox v-model="state" :size="sizeCheck"></CustomCheckbox>
                <CustomCheckbox v-model="state" :size="sizeCheck"></CustomCheckbox>
            </nav>
        </transition>

        <div class="spoiler__btn" @click="inverseActive">
            <i class="material-icons" v-if="!isActive">
                more_horiz
            </i>
            <i class="material-icons" v-if="isActive">
                close
            </i>
        </div>
    </div>
</template>

<script>
    import CustomCheckbox from './CustomCheckbox';

    export default {
        name: "Spoiler",
        components: {
            CustomCheckbox,
        },
        data () {
            return {
                isActive: false,
                sizeCheck: 'big',
                state: '',
            }
        },
      methods: {
          inverseActive: function () {
              this.isActive = !this.isActive;
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
