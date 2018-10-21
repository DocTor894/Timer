<template>
    <div class="time">
        <p>{{ timeText }}</p>
        <button @click="setTime">Узнать время</button>
    </div>
</template>

<script>
export default {
    name: 'timer',
    data () {
        return {
            timeText: ""
        }
    },
    methods:{
        setTime(){
            var timeSQL = new Date(2017, 8, 20, 9, 30, 39);
            var newTime = new Date();
            if(timeSQL.getFullYear() == newTime.getFullYear()){
                if(timeSQL.getMonth() == newTime.getMonth()){
                    if(timeSQL.getDate() == newTime.getDate()){
                        if(timeSQL.getHours() == newTime.getHours()){
                            if((newTime.getMinutes()-timeSQL.getMinutes())<10){
                               this.timeText="Online"
                            }
                            else{
                                this.timeText="Был в сети "+(newTime.getMinutes()-timeSQL.getMinutes())+" минут назад"
                            }
                        }
                        else{
                            this.timeText="Был в сети "+(newTime.getHours()-timeSQL.getHours())+" часов(а) назад"
                        }
                    }
                    else{
                        if((newTime.getDate()-timeSQL.getDate())==1){
                            this.timeText="Был в сети вчера"
                        }
                        else{
                            this.timeText="Был в сети "+timeSQL.getDate()+" "+timeSQL.getMonth()
                        }
                    }
                }
                else{
                    this.timeText="Был в сети "+timeSQL.getDate()+" "+timeSQL.getMonth()
                }
            }
            else{
                this.timeText="Был в сети "+timeSQL.getDate()+" "+timeSQL.getMonth()+" "+timeSQL.getFullYear()+" ,"+timeSQL.getHours()+":"+timeSQL.getMinutes()
            }
        }        
    },
    computed:{
        
    }
}
</script>

<style>
    
</style>
