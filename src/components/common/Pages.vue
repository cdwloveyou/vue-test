<template>
    <div id="pages">
        <div v-if="pageNumber >= 0">
            <button type="button" 
                v-for="(num, idx) in pageNumber" 
                :key="idx" 
                :class="{active:( start/count + 1 == num  )}"
                @click="getListsData({count, start:(num-1)*count})"
            >{{num}}</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Pages',
    computed:{
        ...mapState({
            total: (state) =>{
                return state.listsData.total
            },
            count: (state) => {
                console.log(state.listsData.count)
                return state.listsData.count
            },
            start: (state) => {
                return state.listsData.start
            },
            pageNumber:(state) => {
                return Math.floor(state.listsData.total/state.listsData.count)
            }
        })
    },
    methods:{
        ...mapActions([
            'getListsData'
        ])
    }
}
</script>

<style scoped>
.active{
    background: blue
}
</style>
