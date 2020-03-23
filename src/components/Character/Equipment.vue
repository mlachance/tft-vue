<template>
  <div class="equipment">
    <p>
      <label>
        <span>Weapon:</span>
        <input v-model="character.weapon"/>
      </label>
    </p>
    <p>
      <label>
        <span>Armor:</span>
        <input v-model="character.armor"/>
      </label>
    </p>
  </div>
</template>

<script>
export default {
  name: "Equipment.vue",
  props: ["character"]
};
</script>
