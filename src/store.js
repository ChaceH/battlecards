import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex)

let gameApi = Axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    cards: []
  },
  mutations: {

  },
  actions: {

  }
})
