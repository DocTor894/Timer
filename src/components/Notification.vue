<template>
    <li v-if="item.isLooked">
        <h3>{{item.title}}</h3>
        <p>{{item.text}}</p>
        <p>{{item.datetime}}</p>
    </li>
</template>

<script>
    export default {
        props:['item'],
        name: 'notification',
        data () {
            return {                
            }
        }
    }    
</script>