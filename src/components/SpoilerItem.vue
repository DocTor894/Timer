<template>
    <div class="spoiler__item">
        {{spoilerItem.text}}
    </div>
</template>

<script>
    export default {
        name: "SpoilerItem",
        props:['spoilerItem'],
        data () {
            return {
                
            }
        }
    }
</script>

<style scoped lang="less">
    
</style>