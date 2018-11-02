<template>
    <div class="checkbox">
      <input
        type="checkbox"
        value="Vue"
        v-model="checkResoults"
      >
      <ul>
        <li v-for="item in checkResoults">{{item}}</li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "CustomCheckbox",
    props:['checkResoults'],
    data(){
      return{
      }
    }
  }
</script>

<style scoped>

</style>
