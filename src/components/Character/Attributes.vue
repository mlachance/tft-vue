<template>
  <div id="attributes">
    <attribute :value="character.st" attribute-type="st" label="ST" />
    <attribute :value="character.dx" attribute-type="dx" label="DX" />
    <attribute :value="character.iq" attribute-type="iq" label="IQ" />
    <attribute :value="character.ma" attribute-type="ma" label="MA" />
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
