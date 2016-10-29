<template>
  <form class="material-validation-form">
    <MaterialInput
      name="validated-name"
      :minlength="4"
      :maxlength="10">Your name (from 4 to 10 chars)</MaterialInput>
  </form>
</template>

<script>
  import MaterialInput from '../src/components/MaterialInput.vue'

  module.exports = {
    name: 'material-with-validation',
    components: {
      MaterialInput
    }
  }
</script>

<style lang="scss">
  .material-validation-form {
    max-width: 300px;
    display: block;
    margin: 50px auto;

    p {
      padding: 30px 0;
    }
  }
</style>
