<template>
  <div class="details">
    <h1>Details for {{ localCharacter.name }}</h1>
    <form @submit.prevent="">
      <attributes :character="localCharacter" />
      <equipment :character="localCharacter" />
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
    return {
      localCharacter: {}
    };
  },
  computed: {
    character() {
      return this.$store.state.characters.characterInEdit;
    },
    charId() {
      return this.$route.params.characterId;
    }
  },
  created() {
    this.setUpCharacters();
  },
  mounted() {
    this.setEdit();
    this.localCharacter = this.character;
  },
  watch: {
    character() {
      this.localCharacter = this.character;
    }
  },
  methods: {
    ...mapMutations("characters", ["setIndex", "saveCharacter", "setEdit"]),
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
