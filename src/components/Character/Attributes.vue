<template>
  <div id="attributes">
    <attribute :label="'ST'" :value="character.st" />
    <attribute :label="'DX'" :value="character.dx" />
    <attribute :label="'IQ'" :value="character.iq" />
    <attribute :label="'MA'" :value="character.ma" />
  </div>
</template>

<script>
import Attribute from "../parts/Attribute";
export default {
  name: "Attributes",
  components: { Attribute },
  props: ["character"]
};
</script>
