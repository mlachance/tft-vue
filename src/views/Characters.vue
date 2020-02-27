<template>
  <div id="character-list">
    <h1>List of characters</h1>
    <List />
    <router-link to="/character/new">Add a new character</router-link>
  </div>
</template>

<script>
import List from "../components/Character/List";

export default {
  name: "Characters",
  components: {
    List
  }
};
</script>

<style scoped lang="scss">
// insert SCSS here
</style>
