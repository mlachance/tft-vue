<template>
  <ul>
    <li v-for="item in items" :key="item.name">
      <router-link :to="`/character/${item.index}`">{{ item.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  computed: {
    items() {
      return this.$store.getters["characters/getCharacters"];
    }
  }
};
</script>

<style scoped>

</style>
