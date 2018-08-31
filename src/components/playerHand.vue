<template>
<div>
  <div class="loading" v-if="!player">loading players please wait</div>
  <div class="player-hand" v-else>
  <h4>Player: {{player.name}}</h4> 
  <div class="row justify-content-center">
    <card class="col-xs-2" v-for="hand in player.hand" :card="hand" :visible="true" @click.native="selectCard(hand.id)" :key="hand.id"></card>
  </div>
  </div>
</div>
</template>

<script>

import card from './Card.vue'

export default {
  name: "PlayerHand",
  data(){
    return {};
  },
  computed: {
    player(){
      if(this.$store.state.game)
      return this.$store.state.game.players[0]
    }
  },
  components: {
    card
  },
  methods: {
    selectCard(cardId){
    this.$store.dispatch('updatePlayerCard', {playerId: this.player.id, playerCardId:cardId})
    console.log(cardId)
  }
  }
};
</script>

<style>
.justify-content-center{
  display: flex;
  justify-content: center
},
.selectCard{
  background-color: blue
}
</style>
