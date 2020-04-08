<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/characters">Characters</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: "App",
    created() {
      this.fetchCharacters();
      this.loadEquipment();
    },
    methods: {
      ...mapActions("characters", {
        fetchCharacters: "loadCharacters"
      }),
      loadEquipment() {
        this.$store.dispatch("armor/loadItems");
        this.$store.dispatch("weapons/loadItems");
      }
    }
  }

</script>

<style lang="scss">
@import "assets/styles/main";
</style>
