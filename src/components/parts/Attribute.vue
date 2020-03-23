<template>
  <div>
    <label>
      <span>{{ label }}</span>
      <input v-model="value" type="number" class="attribute" />
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
