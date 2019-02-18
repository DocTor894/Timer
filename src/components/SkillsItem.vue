<template>
  <div class="skill">
    <p class="semiBold">{{ skillName }} {{progress}}%</p>
    <div class="back">
      <div v-bind:style="{ width: progress + '%' }" class="progress"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'skillName',
      'progress'
    ],
    name: 'skills',
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped lang="less">
  
  .skill{
    width: 83%;
    margin: 40px 0;
    
    p{
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    
    .back{
      width: 100%;
      height: 3px;
      background: #d8d8d8;

      .progress{
        height: 100%;
        background: #10c9c3;
      }
    }
  }
  
</style>
