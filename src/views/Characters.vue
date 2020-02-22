<template>
  <div id="character-list">
    <h1>List of characters</h1>
    <List />
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
