<template>
  <div class="equipment">
    <p>
      <label>Weapon: <input :value="character.weapon"/></label>
    </p>
    <p>
      <label>Armor: <input :value="character.armor"/></label>
    </p>
  </div>
</template>

<script>
export default {
  name: "Equipment.vue",
  props: ["character"]
};
</script>
