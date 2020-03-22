<template>
  <div class="equipment">
    <p>
      <label>Character's Name: <input :value="character.name"/></label>
    </p>
  </div>
</template>

<script>
export default {
  name: "Name",
  props: ["character"]
};
</script>
