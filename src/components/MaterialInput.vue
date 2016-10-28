<template>
  <div class="material-input__component">
    <input
      v-if="type === 'email'"
      type="email"
      class="material-input"
      :name="name"
      :id="id"
      v-model="valueCopy"

      :readonly="readonly"
      :disabled="disabled"

      :required="required"
    >
    <input
      v-if="type === 'url'"
      type="url"
      class="material-input"
      :name="name"
      :id="id"
      v-model="valueCopy"

      :readonly="readonly"
      :disabled="disabled"

      :required="required"
    >
    <input
      v-if="type === 'number'"
      type="number"
      class="material-input"
      :name="name"
      :id="id"
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
      type="number"
      class="material-input"
      :name="name"
      :id="id"
      v-model="valueCopy"

      :readonly="readonly"
      :disabled="disabled"

      :max="max"
      :min="min"
      :step="step"
      :required="required"
    >
    <input
      v-if="type === 'text'"
      type="text"
      class="material-input"
      :name="name"
      :id="id"
      v-model="valueCopy"

      :readonly="readonly"
      :disabled="disabled"

      :minlength="minlength"
      :maxlength="maxlength"
      :required="required"
    >
    <span class="material-input-highlight"></span>
    <span class="material-input-bar"></span>

    <label class="material-label">
      <slot></slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'material-input',
    data () {
      return {
        valueCopy: null
      }
    },
    mounted () {
      const vm = this

      if (this.value) { // value might not be provided
        // Here we are following the Vue2 convention on custom v-model:
        // https://github.com/vuejs/vue/issues/2873#issuecomment-223759341
        this.valueCopy = this.value
        this.$el.querySelector(
          'input'
        ).addEventListener(
          'input', (e) => vm.$emit('input', e.target.value), true
        )
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
  $font-weight-normal: normal;

  // Colors:
  $color-white: white;
  $color-grey: grey;
  $color-blue: blue;

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
    background: $color-white;
    transition: $transition;
  }

  // Component:

  .material-input__component {
    margin-bottom: 45px;
    position: relative;

    * {
      box-sizing: border-box;
    }

    input {
      font-size: $font-size-base;
      padding: $spacer $spacer $spacer $spacer / 2;
      display: block;
      width: 100%;
      border: none;
      background: none;
      color: $color-white;
      border-bottom: 1px solid $color-grey;

      &:focus {
        outline: none;
        border: none;

        & ~ .material-input-bar:before, & ~ .material-input-bar:after {
          width: 50%;
        }

        & ~ .material-input-highlight {
          animation: MIHighlighter 0.3s ease;
        }
      }

      &:focus ~ label, &:valid ~ label    {
        top: -2 * $spacer;
        font-size: 14px;
        color: $color-white;
      }
    }

    label {
      color: $color-white;
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

    .material-input-highlight {
      position: absolute;
      height: 60%;
      width: 100px;
      top: 25%;
      left: 0;
      pointer-events: none;
      opacity: 0.5;
    }
  }

  // Animation

  @keyframes MIHighlighter {
    from {
      background: $color-blue;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
</style>
