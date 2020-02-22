<template>
  <ul>
    <li v-for="item in items" :key="item.name">
      <router-link :to="`/character/${item.id}`">{{ item.name }}</router-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "List",
  computed: {
    ...mapGetters("characters", {
      items: "getCharacters"
    })
  }
};
</script>

<style scoped></style>
