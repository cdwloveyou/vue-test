<template>
    <div id="Bar">
        <Navbar /> 
        <button type="button" @click="add()">+</button>
        <button type="button" @click="reduce()">-</button>
    </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import { mapMutations } from 'vuex'

export default {
    name: 'Count',
    components:{
        Navbar
    },
    methods:{
        ...mapMutations([
            'add',
            'reduce'
        ])
    }

}
</script>

<style>

</style>
