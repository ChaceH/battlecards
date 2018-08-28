<template>
  <div class="home container">
    <form @submit.prevent="startGame">
      <input type="text" v-model="newGame.playerName">
      <input type="number" min='1' max='4' v-model="newGame.set">
      <button type="submit">Submit</button>
    </form>
    <playerHand/>
    <enemyHand/>
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
  components: {
    playerHand,
    enemyHand
  },
  methods: {
    startGame(){
      this.$store.dispatch("startGame", this.newGame);
    }
  }
}
</script>
