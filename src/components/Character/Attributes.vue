<template>
  <div id="attributes">
    <attribute :value="character" attribute-type="st" label="ST" />
    <attribute :value="character" attribute-type="dx" label="DX" />
    <attribute :value="character" attribute-type="iq" label="IQ" />
    <attribute :value="character" attribute-type="ma" label="MA" />
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
