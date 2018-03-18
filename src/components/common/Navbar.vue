<template>
    <div id="Navbar">
        <div v-if="routeLists">
            <span v-for="(route,idx) in routeLists" :key="idx">
                <router-link :to="route.path" v-if="route.title">{{route.title}}</router-link>
            </span>
        </div>
        <div v-else>
            <span v-for="(route,idx) in routes" :key="idx">
                <router-link :to="route.path" v-if="route.title">{{route.title}}</router-link>
            </span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Navbar',
    props:['routeLists'],
    computed:{
        ...mapState([
            'routes'
        ])
    }
}
</script>

<style>

</style>