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
    game: {}
  },
  mutations: {
    setGame(state, data){
      state.game = data
    }
  },
  actions: {
    startGame({commit, dispatch}, newGame){
      gameApi.post('', {gameConfig:newGame})
      .then(res => {
        commit('setGame', res.data)
      })
    }
  }
})
