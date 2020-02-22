<template>
    <div>
        <label>
            {{ label }}
            <input>
        </label>
    </div>
</template>

<script>
  export default {
    name: 'Attribute',
    props: {
      label: String,
      value: Number
    }
  };
</script>

<style scoped>

</style>