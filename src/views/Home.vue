<template>
  <div class="home container-fluid">
    <h4>Welcome to BATTLECARDS!</h4>
    <form @submit.prevent="startGame">
      Enter Your Name:<input type="text" v-model="newGame.playerName">
      Choose Card Set:<input type="number" min='1' max='4' v-model="newGame.set">
      <button type="submit">Start Game</button>
    </form>
      <div>
      <button type="button" class="btn btn-danger" @click="fight()">Fight</button>
      </div>
    <h1 v-if="gameOver">{{game.winner.name ? game.winner.name + ' Wins!' : game.winner}}</h1>
    <enemyHand/>
    <div>
    </div>
    <playerHand/>
  </div>
</template>

<script>
// @ is an alias to /src
import playerHand from '@/components/playerHand.vue'
import enemyHand from '@/components/enemyHand.vue'

export default {
  name: 'home',
  data(){
    return {
      newGame: {
        playerName: '',
        set: 1
      }
    }
  },
  methods: {
    startGame(){
      this.$store.dispatch("startGame", this.newGame);
    },
    fight(){
      this.$store.dispatch("afterAttack", {fightingCards:this.$store.state.fightingCards, gameId:this.$store.state.game.id})
    }
  },
  components: {
    playerHand,
    enemyHand,
  },
  computed: {
    game(){
     return this.$store.state.game
    },
    gameOver(){
     return this.game && this.game.over
    }
  }
};
</script>
<style scoped>

</style>