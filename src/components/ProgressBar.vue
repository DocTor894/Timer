<template>
    <div class="progress">
        <canvas v-insert-message="{ maxProgress: maxProgress, loadProcess: loadProcess }"></canvas>
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
        directives: {
            insertMessage: function(canvasElement, binding) {
                var ctx = canvasElement.getContext("2d");
                var s = JSON.stringify
                var maxProgress = s(binding.value.maxProgress);
                var loadProcess = s(binding.value.loadProcess);
                var step = 100/maxProgress;
                ctx.strokeStyle='#dee9ed';
                ctx.lineWidth=10;
                ctx.beginPath();
                ctx.arc(55, 55, 50, 0, step*maxProgress, false);
                ctx.stroke();
                ctx.closePath();

                ctx.strokeStyle='#2ebbe8';
                ctx.beginPath();
                ctx.arc(55, 55, 50, 0, step*0.063*loadProcess, false);
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
</script>

<style scoped lang="less">
    .progress{
        width: 110px;
        height: 110px;
        transform: rotate(-90deg);
        position: absolute;
        left: calc(~"50% - 55px");
        top: calc(~"50% - 55px");
    }
</style>
