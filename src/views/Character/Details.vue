<template>
  <div class="details">
    <h1>Details for {{ character.name }}</h1>
      <attributes v-bind:character="character" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Attributes from '../../components/Character/Attributes';

export default {
  name: "Details",
  components: {Attributes},
  data() {
    return {};
  },
  computed: {
    ...mapGetters("characters", {
      character: "getCharacter"
    }),
    charId() {
      return this.$route.params.characterId;
    }
  },
  mounted() {
    this.setIndex(this.$route.params.characterId)
  },
  methods: {
    ...mapMutations("characters", ["setIndex"])
  }
};
</script>

<style scoped></style>
