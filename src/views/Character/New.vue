<template>
  <div class="details">
    <h1>Create a new character:</h1>
    <form @submit.prevent="processForm">
      <name :character="localCharacter" />
      <attributes :character="localCharacter" />
      <equipment :character="localCharacter" />
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Attributes from "../../components/Character/Attributes";
import Equipment from "../../components/Character/Equipment";
import Name from "../../components/Character/Name";
import router from "../../router";

export default {
  name: "New",
  components: { Name, Equipment, Attributes },
  data() {
    return {
      localCharacter: {}
    };
  },
  computed: {
    ...mapGetters("characters", {
      character: "getCharacter"
    })
  },
  mounted() {
    this.setIndex(-1);
    this.setEdit();
    this.localCharacter = this.character;
  },
  watch: {
    character() {
      this.localCharacter = this.character;
    }
  },
  methods: {
    ...mapMutations("characters", ["saveCharacter", "setEdit", "setIndex"]),
    processForm() {
      debugger;
      this.saveCharacter(this.localCharacter).then(() => router.push("/characters"));
    }
  }
};
</script>
