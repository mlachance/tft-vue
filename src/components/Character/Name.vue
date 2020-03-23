<template>
  <div class="equipment">
    <p>
      <label>
        <span>Character's Name:</span>
        <input :value="character.name" />
      </label>
    </p>
  </div>
</template>

<script>
export default {
  name: "Name",
  props: ["character"]
};
</script>
