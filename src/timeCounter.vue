<template>
        <p>{{ timeText }}</p>
</template>

<script>
export default {
    name: 'timeCounter',
    props: ['timeCount'],
    data () {
        return {
            timeText: ""
        }
    },
    methods:{
        setTime: function (){
            var timeSQL = new Date(this.timeCount);
            var newTime = new Date();            
            var monthArr = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
            
            if(timeSQL.getFullYear() == newTime.getFullYear()){
                if(timeSQL.getMonth() == newTime.getMonth()){
                    if(timeSQL.getDate() == newTime.getDate()){
                        if(timeSQL.getHours() == newTime.getHours()){
                            if((newTime.getMinutes()-timeSQL.getMinutes())<10){
                               this.timeText="Online"
                            }
                            else{
                                this.timeText=`Был в сети в ${timeSQL.getHours()}:${timeSQL.getMinutes()}`
                            }
                        }
                        else{
                            this.timeText=`Был в сети в ${timeSQL.getHours()}:${timeSQL.getMinutes()}`
                        }
                    }
                    else{
                        if((newTime.getDate()-timeSQL.getDate())==1){
                            this.timeText=`Был в сети вчера в ${timeSQL.getHours()}:${timeSQL.getMinutes()}`
                        }
                        else{
                            this.timeText=`Был в сети ${timeSQL.getDate()} ${monthArr[timeSQL.getMonth()]} в ${timeSQL.getHours()}:${timeSQL.getMinutes()}`
                        }
                    }
                }
                else{
                    this.timeText=`Был в сети ${timeSQL.getDate()} ${monthArr[timeSQL.getMonth()]} в ${timeSQL.getHours()}:${timeSQL.getMinutes()}`
                }
            }
            else{
                this.timeText=`Был в сети ${timeSQL.getDate()} ${monthArr[timeSQL.getMonth()]} ${timeSQL.getFullYear()}, ${timeSQL.getHours()}:${timeSQL.getMinutes()}`
            }
        }
    },
    watch: {
        'timeSQL': {
            handler: function () {
                this.setTime();
            },
            immediate: true
        }
    }
        
}
</script>

<style>
    
</style>