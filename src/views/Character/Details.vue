<template>
  <div class="details">
    <h1>Details for {{ character.name }}</h1>
    <attributes v-bind:character="character" />
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
import Attributes from "../../components/Character/Attributes";

export default {
  name: "Details",
  components: { Attributes },
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
  created() {
    this.setUpCharacters();
  },
  methods: {
    ...mapMutations("characters", ["setIndex"]),
    setUpCharacters() {
      if (this.$store.state.characters.characters.length < 1 ) {
        this.$store.dispatch("characters/loadCharacters").then(() => {
          this.setIndex(this.charId);
        });
      } else {
        this.setIndex(this.charId);
      }
    }
  }
};
</script>

<style scoped></style>
