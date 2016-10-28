<template>
  <form class="test-form">
    <p>Hello, {{ username }}</p>
    <MaterialInput name="name" v-model="username">Your name</MaterialInput>
  </form>
</template>

<script>
  var MaterialInput = require('../src/components/MaterialInput.vue')

  module.exports = {
    data: function () {
      return {
        username: 'admin'
      }
    },
    components: {
      'MaterialInput': MaterialInput
    }
  }
</script>

<style lang="scss">
  form {
    max-width: 300px;
    display: block;
    margin: 0 auto;

    p {
      padding: 30px 0;
    }
  }

  // Extra styles to fit it to the white screen:
  .material-input__component {
    .material-input,
    .material-label,
    input:focus ~ .material-label,
    input:valid ~ .material-label {
      color: pink;
    }

    span.material-input-bar {
      &:before, &:after {
        background: pink;
      }
    }
  }
</style>
