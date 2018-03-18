<template>
  <div id="Home">
    <Navbar />
    {{count}}
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import { mapState } from "vuex";
export default {
  name: 'Home',
  computed:{
    ...mapState([
      'count'
    ])
  },
  components:{
    Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
