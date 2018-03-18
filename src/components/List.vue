<template>
    <div id="List">
        <Navbar /> 
        <p>this id is {{ this.$route.params.id}}</p>
        <p>this movie is {{ this.listData.title}}</p>
    </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import { mapState, mapActions } from "vuex";
export default {
    name: 'List',
    data(){
      return {
          
      }
    },
    computed:{
        ...mapState([
            'listData'
        ])
    },
    components:{
        Navbar
    },
    methods:{
        ...mapActions([
            'getListData'
        ])
    },
    mounted(){
        this.getListData(this.$route.params.id);
    }

}
</script>

<style>

</style>