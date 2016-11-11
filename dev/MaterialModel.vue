<template>
  <form class="material-model-form">
    <a href="#">back</a>

    <p>Hello, {{ username }}</p>
    <MaterialInput name="name" v-model="username">Your name</MaterialInput>
    <MaterialInput name="email" type="email" v-model="email">Your email</MaterialInput>
    <p>We will send you a letter, {{ email }}</p>
  </form>
</template>

<script>
  import MaterialInput from '../src/components/MaterialInput.vue'

  module.exports = {
    name: 'material-model',
    data: function () {
      return {
        username: 'admin',
        email: ''
      }
    },
    components: {
      MaterialInput
    }
  }
</script>

<style lang="scss">
  .material-model-form {
    max-width: 300px;
    display: block;
    margin: 0 auto;

    p {
      padding: 30px 0;
    }

    // Extra styles to fit it to the white screen:
    // .material-input__component {
    //   .material-input,
    //   .material-label,
    //   input:focus ~ .material-label,
    //   input:valid ~ .material-label {
    //     color: pink;
    //   }

    //   span.material-input-bar {
    //     &:before, &:after {
    //       background: pink;
    //     }
    //   }
    // }
  }
</style>
