<template>
    <div :class="side">
        <transition :name="side">
            <nav class="spoiler__nav"
                 v-if="isActive"
                 :key="isActive">
                 <SpoilerItem
                     v-for="spoilerItem in spoilerItems"
                     :spoilerItem="spoilerItem"></SpoilerItem>
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
    import SpoilerItem from './SpoilerItem.vue';

    export default {
        name: "Spoiler",
        components: {
            SpoilerItem,
        },
        props:['side', 'spoilerItems'],
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
    .left{
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 44px;
        width: 40px;
        position: relative;

        .spoiler__nav{
            right: 100%;
            position: absolute;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;        
            
            .spoiler__item{
                cursor: pointer;
                border: 3px solid #fff;
                padding: 10px 20px;
                margin-right: 20px;
            }
        }
      
        .spoiler__btn{
            cursor: pointer;
        }
        
        &-enter-active {
          transition: all .8s ease;
        }
        &-enter, &-leave-to{
            transition: all .8s ease;
            transform: translateX(10px);
            opacity: 0;
        }
    }
    
    .top{
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40px;
        position: relative;

        .spoiler__nav{
            bottom: 100%;
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            
            .spoiler__item{
                cursor: pointer;
                border: 3px solid #fff;
                padding: 10px 20px;
                margin-bottom: 20px;
            }
        }
      
        .spoiler__btn{
            cursor: pointer;
        }
        
        &-enter-active {
          transition: all .8s ease;
        }
        &-enter, &-leave-to{
            transition: all .8s ease;
            transform: translateY(10px);
            opacity: 0;
        }
    }
    
    .right{
        margin: auto;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        height: 44px;
        width: 40px;
        position: relative;

        .spoiler__nav{
            left: 100%;
            position: absolute;
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            align-items: center;
            
            .spoiler__item{
                cursor: pointer;
                border: 3px solid #fff;
                padding: 10px 20px;
                margin-left: 20px;
            }
        }
      
        .spoiler__btn{
            cursor: pointer;
        }
        
        &-enter-active {
          transition: all .8s ease;
        }
        &-enter, &-leave-to{
            transition: all .8s ease;
            transform: translateX(-10px);
            opacity: 0;
        }
    }
    
    .bottom{
        margin: auto;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        width: 40px;
        position: relative;

        .spoiler__nav{
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
            top: 100%;
            position: absolute;
            
            .spoiler__item{
                cursor: pointer;
                border: 3px solid #fff;
                padding: 10px 20px;
                margin-top: 20px;
            }
        }
      
        .spoiler__btn{
            cursor: pointer;
        }
        
        &-enter-active {
          transition: all .8s ease;
        }
        &-enter, &-leave-to{
            transition: all .8s ease;
            transform: translateY(-10px);
            opacity: 0;
        }
    }
    
</style>
