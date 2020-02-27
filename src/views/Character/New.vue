<template>
  <div class="details">
    <h1>Create a new character:</h1>
    <form @submit.prevent="">
      <attributes :character="character" />
      <equipment :character="character" />
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Attributes from "../../components/Character/Attributes";
import Equipment from "../../components/Character/Equipment";

export default {
  name: "New",
  components: { Equipment, Attributes },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("characters", {
      character: "getNewCharacter"
    }),
    charId() {
      return this.$route.params.characterId;
    }
  },
  methods: {
    ...mapMutations("characters", ["saveCharacter"]),
  }
};
</script>
