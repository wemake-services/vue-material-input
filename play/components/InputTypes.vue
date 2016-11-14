<template>
  <form class="example">
    <MaterialInput name="name" type="text">Text</MaterialInput>
    <MaterialInput name="name" type="password">Password</MaterialInput>
    <MaterialInput name="name" type="number">Number</MaterialInput>
    <MaterialInput name="name" type="url">URL</MaterialInput>
    <MaterialInput name="name" type="email">Email</MaterialInput>
    <MaterialInput name="name" type="tel">Telephone</MaterialInput>
  </form>
</template>

<script>
  import MaterialInput from '../../src/components/MaterialInput.vue'

  export default {
    name: 'material-model',
    components: {
      MaterialInput
    }
  }
</script>
