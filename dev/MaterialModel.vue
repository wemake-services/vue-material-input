<template>
  <form class="material-model-form">
    <a href="#">back</a>

    <p>Hello, {{ username }}</p>
    <MaterialInput name="name" v-model="username">Your name</MaterialInput>
    <MaterialInput name="email" type="email" v-model="email">Your email</MaterialInput>

    <input v-model="test">
    <p>We will send you a letter, {{ email }}</p>

    <button type="button" @click="clean">Clean</button>
  </form>
</template>

<script>
  import MaterialInput from '../src/components/MaterialInput.vue'

  module.exports = {
    name: 'material-model',
    data: function () {
      return {
        username: 'admin',
        email: '',
        test: ''
      }
    },
    methods: {
      clean () {
        this.username = ''
        this.email = ''
        this.test = ''
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
