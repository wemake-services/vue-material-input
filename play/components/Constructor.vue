<template>
  <form class="example">
    <MaterialInput v-bind="childProperies">
      {{ text }}
    </MaterialInput>

    <p>Modify it!</p>

    <div class="example-field">
      <label>Text</label>
      <input type="text" v-model="text" />
    </div>

    <div class="example-field">
      <label>Placeholder</label>
      <input type="text" v-model="childProperies.placeholder" />
    </div>

    <div class="example-field">
      <label>Value</label>
      <input type="text" v-model="childProperies.value" />
    </div>

    <div class="example-field">
      <label>Disabled</label>
      <input type="checkbox" v-model="childProperies.disabled" />
    </div>

    <div class="example-field">
      <label>Read-only</label>
      <input type="checkbox" v-model="childProperies.readonly" />
    </div>

  </form>
</template>

<script>
  import MaterialInput from '../../src/components/MaterialInput.vue'

  export default {
    name: 'material-model',
    data () {
      return {
        text: 'Default',
        childProperies: {
          type: 'text',
          placeholder: null,
          value: null,
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
