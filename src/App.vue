<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
    data(){
      return {
          nodes:{
              'node1':{
                x:123,
                y:123
              }
          }
      }
    },
    computed:{
      count(){
        return this.$store.state.count
      }
    }
}
</script>

<style>
</style>
