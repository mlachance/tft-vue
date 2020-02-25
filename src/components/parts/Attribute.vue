<template>
    <div>
        <label>
            {{ label }}
            <input :value="value" @input="updateValue">
        </label>
    </div>
</template>

<script>
  export default {
    name: 'Attribute',
    props: {
      label: String,
      value: Number
    },
    methods: {
      updateValue(value) {
        this.$store.commit("updateSingleValue", value)
      }
    }
  };
</script>

<style scoped>

</style>
