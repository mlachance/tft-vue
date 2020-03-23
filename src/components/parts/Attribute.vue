<template>
  <div>
    <label>
      <span>{{ label }}</span>
      <input v-model="value[attributeType]" type="number" class="attribute" />
    </label>
  </div>
</template>

<script>
export default {
  name: "Attribute",
  props: {
    label: String,
    attributeType: String,
    value: Object
  }
};
</script>
