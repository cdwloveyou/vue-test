<template>
    <div id="Foo">
        <Navbar /> 
        <ul>
            <li v-for="item in listsData.subjects" :key="item.id">
                <router-link :to="'/list/' + item.id "> {{ item.title }}</router-link>
            </li>
        </ul>
        <Pages /> 
    </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import Pages from '@/components/common/Pages'
import { mapActions, mapState } from 'vuex'
export default {
    name: 'Foo',
    computed:{
        ...mapState([
            'listsData'
        ])
    },
    components:{
        Navbar,
        Pages
    },
    methods:{
        ...mapActions([
            'increment',
            'getListsData'
        ])
    },
    mounted(){
        this.getListsData();
    }
}
</script>

<style>

</style>
