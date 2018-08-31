<template>
<div>
  <div class="loading" v-if="!enemy">loading players please wait</div>
  <div class="enemy-hand" v-else>
  <h4>Enemy: {{enemy.name}}</h4>
  <div class="row justify-content-center">
    <card class="col-xs-2" v-for="hand in enemy.hand" :card="hand" :visible="hand.visible" @click.native="selectCard(hand.id)" :key="hand.id"></card>
  </div>
  </div>
</div>
</template>

<script>
import card from "./Card.vue";

export default {
  name: "EnemyHand",
  data() {
    return {};
  },
  computed: {
    enemy() {
      if (this.$store.state.game) return this.$store.state.game.players[1];
    }
  },
  components: {
    card
  },
  methods: {
    selectCard(cardId) {
     this.$store.dispatch('updateEnemyCard', {opponentId: this.enemy.id, opponentCardId:cardId})
      console.log(cardId);
    }
  }
};
</script>

<style>
.justify-content-center{
  display: flex;
  justify-content: center
}
</style>
