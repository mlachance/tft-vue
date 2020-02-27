<template>
  <div class="details">
    <h1>Details for {{ character.name }}</h1>
    <form @submit.prevent="">
      <attributes v-bind:character="character" />
      <equipment v-bind:character="character" />
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Attributes from "../../components/Character/Attributes";
import Equipment from "../../components/Character/Equipment";

export default {
  name: "Details",
  components: { Equipment, Attributes },
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
    ...mapMutations("characters", ["setIndex", "saveCharacter"]),
    setUpCharacters() {
      if (this.$store.state.characters.characters.length < 1) {
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
