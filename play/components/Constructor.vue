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
      <label>Error value</label>
      <input type="text" v-model="childProperies.errorMessages" />
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
          readonly: false,
          errorMessages: 'Error value'
        }
      }
    },
    components: {
      MaterialInput
    }
  }
</script>

<style lang="sass">
    // Theme:

  $color-white: white;
  $color-grey: #9E9E9E;
  $color-grey-light: #E0F7FA;
  $color-cyan: #00BCD4;
  $color-cyan-dark: #006064;
  $color-black: black;

  .material-input--cyan {
    background: $color-white;

    .material-input {
      background: none;
      color: $color-black;
      border-bottom: 1px solid $color-grey-light;
    }

    .material-label {
      color: $color-grey;
    }

    .material-input-bar {
      &:before,
      &:after {
        background: $color-cyan;
      }
    }

    // Active state:

    &.material--active {
      .material-label {
        color: $color-cyan;
      }
    }

    // Errors:

    &.material--has-errors {
      &.material--active .material-label {
        color: $color-cyan-dark;
      }

      .material-input-bar {
        &:before,
        &:after {
          background: $color-cyan-dark;
        }
      }

      .material-errors {
        color: $color-cyan-dark;
      }
    }
  }
</style>
