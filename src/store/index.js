import Vue from 'vue';
import Vuex from 'vuex';
import fetchJsonp from 'fetch-jsonp';
import routes from "@/router/routerConfig";

import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

const state = {
    routes,
    count:0,
    listsData:{},
    listData:{}
}

const mutations = {
    add(state, payload){
        state.count += 1;
    },
    reduce(state, payload){
        state.count -= 1;
    },
    getListsData(state, payload){
        state.listsData = payload;
    },
    getListData(state, payload){
        state.listData = payload;
    }
}

const actions = {
    getListsData({ dispatch,commit, state},payload){
        const data = payload || {
            count:10,
            start:0
        }
        fetchJsonp('https://api.douban.com/v2/movie/top250?count=' + data.count + '&start=' + data.start, {
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((res) => {
            return res.json();
        }).then((res) =>{
            commit('getListsData',res)
        })
    },
    getListData({ dispatch, commit, state },id){
        fetchJsonp('https://api.douban.com/v2/movie/subject/'+id, {
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((res) => {
            return res.json();
        }).then((res) => {
            commit('getListData', res)
        })
    }
}

export default new Vuex.Store({
    plugins:[createLogger({
        collapsed:false
    })],
    actions,
    state,
    mutations
})