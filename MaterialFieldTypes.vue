<template>
  <form class="material-field-type-form">
    <p>Input types</p>
    <MaterialInput name="name" type="text">Text</MaterialInput>
    <MaterialInput name="name" type="password">Password</MaterialInput>
    <MaterialInput name="name" type="number">Number</MaterialInput>
    <MaterialInput name="name" type="url">URL</MaterialInput>
    <MaterialInput name="name" type="email">Email</MaterialInput>
    <MaterialInput name="name" type="tel">Telephone</MaterialInput>
  </form>
</template>

<script>
  import MaterialInput from '../src/components/MaterialInput.vue'

  module.exports = {
    name: 'material-model',
    components: {
      MaterialInput
    }
  }
</script>

<style lang="scss">
  .material-field-type-form {
    max-width: 300px;
    display: block;
    margin: 0 auto;

    p {
      padding: 30px 0;
    }
  }
</style>
