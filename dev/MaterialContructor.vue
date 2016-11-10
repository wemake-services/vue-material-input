<template>
  <form class="material-field-constructor-form">
    <a href="#">back</a>

    <p>Input constructor</p>
    <MaterialInput v-bind="childProperies">
      {{ text }}
    </MaterialInput>

    <p>Modify it!</p>

    <div class="contructor-field">
      <label>Text</label>
      <input type="text" v-model="text" />
    </div>

    <div class="contructor-field">
      <label>Placeholder</label>
      <input type="text" v-model="childProperies.placeholder" />
    </div>

    <div class="contructor-field">
      <label>Disabled</label>
      <input type="checkbox" v-model="childProperies.disabled" />
    </div>

    <div class="contructor-field">
      <label>Read-only</label>
      <input type="checkbox" v-model="childProperies.readonly" />
    </div>

  </form>
</template>

<script>
  import MaterialInput from '../src/components/MaterialInput.vue'

  module.exports = {
    name: 'material-model',
    data () {
      return {
        text: 'Default',
        childProperies: {
          type: 'text',
          placeholder: null,
          disabled: false,
          readonly: false
        }
      }
    },
    components: {
      MaterialInput
    }
  }
</script>

<style lang="scss">
  .material-field-constructor-form {
    max-width: 300px;
    display: block;
    margin: 0 auto;

    p {
      padding: 30px 0;
    }
  }
</style>
