<template>
    <div id="attributes">
        <attribute v-bind:label="'ST'" v-bind:value="character.st"/>
        <attribute v-bind:label="'DX'" v-bind:value="character.dx"/>
        <attribute v-bind:label="'IQ'" v-bind:value="character.iq"/>
        <attribute v-bind:label="'MA'" v-bind:value="character.ma"/>
    </div>
</template>

<script>
  import Attribute from '../parts/Attribute';
  export default {
    name: 'Attributes',
    components: {Attribute},
    props: [
        "character"
    ]
  };
</script>

<style scoped>

</style>