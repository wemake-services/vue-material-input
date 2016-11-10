<template>
  <div class="material-input__component">
    <input
      v-if="type === 'email'"
      type="email"
      class="material-input"
      :class="computedClasses"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-model="valueCopy"

      :readonly="readonly"
      :disabled="disabled"

      :required="required"
    >
    <input
      v-if="type === 'url'"
      type="url"
      class="material-input"
      :class="computedClasses"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-model="valueCopy"

      :readonly="readonly"
      :disabled="disabled"

      :required="required"
    >
    <input
      v-if="type === 'number'"
      type="number"
      class="material-input"
      :class="computedClasses"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-model="valueCopy"

      :readonly="readonly"
      :disabled="disabled"

      :max="max"
      :min="min"
      :step="step"
      :minlength="minlength"
      :maxlength="maxlength"
      :required="required"
    >
    <input
      v-if="type === 'password'"
      type="password"
      class="material-input"
      :class="computedClasses"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-model="valueCopy"

      :readonly="readonly"
      :disabled="disabled"

      :max="max"
      :min="min"
      :step="step"
      :required="required"
    >
    <input
      v-if="type === 'tel'"
      type="tel"
      class="material-input"
      :class="computedClasses"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-model="valueCopy"

      :readonly="readonly"
      :disabled="disabled"

      :required="required"
    >
    <input
      v-if="type === 'text'"
      type="text"
      class="material-input"
      :class="computedClasses"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-model="valueCopy"

      :readonly="readonly"
      :disabled="disabled"

      :minlength="minlength"
      :maxlength="maxlength"
      :required="required"
    >

    <span class="material-input-bar"></span>

    <label class="material-label">
      <slot></slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'material-input',
    computed: {
      computedClasses () {
        const classes = []

        if (!!this.valueCopy) {
          classes.push('material-input--has-value')
        }

        if (this.placeholder && !this.valueCopy) {
          classes.push('material-input--has-placeholder')
        }

        return classes
      }
    },
    data () {
      return {
        valueCopy: null
      }
    },
    mounted () {
      const input = this.$el.querySelector('input')

      if (this.value) { // value might not be provided
        // Here we are following the Vue2 convention on custom v-model:
        // https://github.com/vuejs/vue/issues/2873#issuecomment-223759341
        this.valueCopy = this.value
        input.addEventListener(
          'input', this.handleModelInput, false
        )
      }

      if (this.pattern) {
        input.addEventListener(
          'input', this.handleValidationInput, false
        )
      }
    },
    beforeDestroy () {
      // Unbinding events:
      const input = this.$el.querySelector('input')

      if (this.value) {
        input.removeEventListener(
          'input', this.handleModelInput
        )
      }

      if (this.pattern) {
        input.removeEventListener(
          'input', this.handleValidationInput
        )
      }
    },
    methods: {
      handleModelInput (event) {
        this.$emit('input', event.target.value)
      },
      handleValidationInput (event) {
        const input = this.$el.querySelector('input')
        const message = this.pattern.regex.test(input.value)
          ? '' : this.pattern.message
        // We might want to provide custom message for the pattern prop.
        input.setCustomValidity(message)
      }
    },
    props: {
      id: {
        type: String,
        default: null
      },
      name: {
        type: String,
        default: null
      },
      type: {
        type: String,
        default: 'text'
      },
      value: {
        default: null
      },
      placeholder: {
        type: String,
        default: null
      },
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      min: {
        type: String,
        default: null
      },
      max: {
        type: String,
        default: null
      },
      step: {
        type: Number,
        default: null
      },
      minlength: {
        type: Number,
        default: null
      },
      maxlength: {
        type: Number,
        default: null
      },
      pattern: {
        type: Object,
        default: null
      },
      required: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="scss">
  // Fonts:
  $font-size-base: 16px;
  $font-size-small: 14px;
  $font-weight-normal: normal;

  // Colors:
  $color-white: white;
  $color-grey: #9E9E9E;
  $color-grey-light: #E0E0E0;
  $color-blue: #2196F3;
  $color-red: #F44336;
  $color-black: black;

  // Utils
  $spacer: 10px;
  $transition: 0.2s ease all;

  // Base clases:
  %base-bar-pseudo {
    content: '';
    height: 1px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: $color-blue;
    transition: $transition;
  }

  // Mixins
  @mixin slided-top() {
    top: -2 * $spacer;
    font-size: $font-size-small;
  }

  // Component:

  .material-input__component {
    margin-top: 45px;
    position: relative;
    background: $color-white;

    * {
      box-sizing: border-box;
    }

    input {
      font-size: $font-size-base;
      padding: $spacer $spacer $spacer $spacer / 2;
      display: block;
      width: 100%;

      background: none;
      color: $color-black;

      border: none;
      border-bottom: 1px solid $color-grey-light;
      border-radius: 0;

      &:focus {
        outline: none;
        border: none;
        border-bottom: 1px solid transparent; // fixes the height issue

        & ~ .material-input-bar:before,
        & ~ .material-input-bar:after {
          width: 50%;
        }
      }

      &:focus ~ label,
      &[readonly="readonly"] ~ label,
      &.material-input--has-value:valid ~ label {
        @include slided-top();

        color: $color-blue;
      }

      // Placeholder should not highlight label:
      &.material-input--has-placeholder ~ label {
        @include slided-top();
      }

      // When form validation is active these styles will
      // highlight the errored input.
      &.material-input--has-value:invalid {
        ~ .material-input-bar {
          &:before, &:after {
            background: $color-red;
          }
        }

        ~ label {
          @include slided-top();
          color: $color-red;
        }
      }
    }

    label {
      color: $color-grey;
      font-size: $font-size-base;
      font-weight: $font-weight-normal;
      position: absolute;
      pointer-events: none;
      left: 0;
      top: $spacer;
      transition: $transition;
    }

    .material-input-bar  {
      position: relative;
      display: block;
      width: 100%;

      &:before {
        @extend %base-bar-pseudo;
        left: 50%;
      }

      &:after {
        @extend %base-bar-pseudo;
        right: 50%;
      }
    }
  }
</style>
