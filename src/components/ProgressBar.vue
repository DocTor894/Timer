<template>
    <div class="set-size">

      <div class="progress-wrapper progress-45">
        <div class="progress" :style="{clip: rClip}">
          <div class="left-side half-circle"
               :style="{transform: progressDeg}"></div>
          <div class="right-side half-circle"
               :style="{display: rDisplay, transform: rProgressDeg}"></div>
        </div>
        <div class="back-circle"></div>
      </div>
    </div>
</template>

<script>    
    export default {
        name: "ProgressBar",
        props:['maxProgress','loadProcess'],
        data(){
            return{
                rClip: '',
                rDisplay: '',
                rProgressDeg: '',
                step: 100/this.maxProgress * this.loadProcess,
                progressDeg: 'rotate(' + 360/this.maxProgress * this.loadProcess + 'deg)',
                rightSide: 'rect(auto, auto, auto, auto)',
            } 
        },
        watch: {
            'loadProcess': {
                handler: function () {                    
                   if(this.step<=50){
                       this.rDisplay='none';
                       this.rProgressDeg='';
                   } else {
                       this.rDisplay='';
                       this.rProgressDeg='rotate(' + 180 + 'deg)';
                       this.rClip='rect(auto, auto, auto, auto)'
                   }
                },
                immediate: true
            }
        }
    }
</script>

<style scoped lang="less">
    // Vars
    @default-size: 1em;
    @border-color: #1abc9c;
    
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
      height: @default-size;
      width: @default-size;
      float: left;
      margin: 15px;
      position: relative;

      &:nth-child(3n + 1) {
        clear: both;
      }

      .progress {
        height: 100%;
        width: 100%;
        clip: rect(0, @default-size, @default-size, @default-size / 2);
        left: 0;
        position: absolute;
        top: 0;

        .half-circle {
          height: 100%;
          width: 100%;
          border: (@default-size / 10) solid;
          border-color: @border-color;    
          border-radius: 50%;
          clip: rect(0, @default-size / 2, @default-size, 0);
          left: 0;
          position: absolute;
          top: 0;
        }
      }

      .back-circle {
        height: 100%;
        width: 100%;
        border: @default-size / 10 solid #bdc3c7; 
        border-radius: 50%;
      }
    }
</style>
