<template>
  <ul>
    <li v-for="item in items" :key="item.name">
      <router-link :to="`/character/${item.id}`" @click="setIndex(item.id)">{{ item.name }}</router-link>
    </li>
  </ul>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';

export default {
  name: "List",
  computed: {
    ...mapGetters("characters", {
      items: "getCharacters"
    })
  },
  methods: {
    ...mapMutations("characters", ["setIndex"])
  }
};
</script>

<style scoped></style>
