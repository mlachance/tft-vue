<template>
  <div>
    <label>
      {{ label }}
      <input v-model="value" type="number" />
    </label>
  </div>
</template>

<script>
export default {
  name: "Attribute",
  props: {
    label: String,
    attributeType: String,
    value: Number
  }
};
</script>

<style scoped></style>
