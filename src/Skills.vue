<template>
  <div class="skills__container">
     <p class="semiBold">Proffesionals Skills</p>
    <SkillsItem :skillName="firstSkillName" :progress="firstProgress"></SkillsItem>
    <SkillsItem :skillName="secondSkillName" :progress="secondProgress"></SkillsItem>
    <SkillsItem :skillName="threadSkillName" :progress="threadProgress"></SkillsItem>
  </div>
</template>

<script>
  import SkillsItem from './components/SkillsItem.vue';
  
  export default {
    name: 'skills',
    components:{
      SkillsItem
    },
    data () {
      return {
        firstSkillName: "UI/UX Design",
        firstProgress: "75",
        secondSkillName: "web development",
        secondProgress: "90",
        threadSkillName: "marketing",
        threadProgress: "65",
      }
    }
  }
</script>

<style>
  .skills__container{
    margin: auto 0;
    grid-column-start: 2;
  }
</style>
