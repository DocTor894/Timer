<template>
    <div class="set-size charts-container">

      <div class="progress-wrapper progress-45">
        <div class="progress">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
        <div class="shadow"></div>
      </div>

    </div>
</template>

<script>    
    export default {
        name: "ProgressBar",
        props:['maxProgress','loadProcess'],
        data(){
            return{
                
            }
        },
        watch: {
            'loadProcess': {
                handler: function () {
                    
                },
                immediate: true
            }
        }
    }
</script>

<style scoped lang="less">
    // Vars
    @default-size: 1em;
    @maxVol: 5;
    @step: 100/@maxVol;
    @progressVol: 2;

    // Mixins
    .size(@width, @height) {
      height: @height;
      width: @width;
    }

    .draw-progress(@progress, @color) {
      .progress {
        .half-circle {
          border-color: @color;
        }

        .left-side {
          transform: rotate(@progress * 3.6deg);
        }

        .right-side when(@progress <= 50){
            display: none;
        }
        .right-side when(@progress > 50) {
            transform: rotate(180deg);
        }
      }
      .progress when(@progress > 50){
        clip: rect(auto, auto, auto, auto);
      }
    }

    // Selectors
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    .set-size {
      font-size: 10em;
    }

    .progress-wrapper {
      .size(@default-size, @default-size);
      float: left;
      margin: 15px;
      position: relative;

      &:nth-child(3n + 1) {
        clear: both;
      }

      .progress {
        .size(100%, 100%);
        clip: rect(0, @default-size, @default-size, @default-size / 2);
        left: 0;
        position: absolute;
        top: 0;

        .half-circle {
          .size(100%, 100%);
          border: (@default-size / 10) solid #3498db;
          border-radius: 50%;
          clip: rect(0, @default-size / 2, @default-size, 0);
          left: 0;
          position: absolute;
          top: 0;
        }
      }

      .shadow {
        .size(100%, 100%);
        border: @default-size / 10 solid #bdc3c7;
        border-radius: 50%;
      }

      &.progress-45 {
        .draw-progress(@progressVol*@step, #1abc9c);
      }
    }
</style>
