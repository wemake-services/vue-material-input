<template>
  <form class="example">
    <p>Hello, {{ username }}</p>
    <MaterialInput
      name="username"
      v-model="username">
        Your name
    </MaterialInput>

    <button type="button" @click="clean">Clean</button>
  </form>
</template>

<script>
  import Vue from 'vue'

  import MaterialInput from '../../src/components/MaterialInput.vue'

  export default {
    name: 'material-model',
    data: function () {
      return {
        username: ''
      }
    },
    methods: {
      clean () {
        this.username = ''
      }
    },
    components: {
      MaterialInput
    }
  }
</script>

<style lang="sass">
  .example {
    max-width: 300px;
    display: block;
    margin: 0 auto;

    .example-field {
      input {
        padding: .5em .6em;
        display: block;
        border: 1px solid #ccc;
        box-shadow: inset 0 1px 3px #ddd;
        border-radius: 4px;
        vertical-align: middle;
        box-sizing: border-box;
      }
    }

    button {
      margin-top: 10px;
      user-select: none;
      border: 1px solid #e2e2e2;
      border-radius: 3px;
      outline: none;
      background-color: white;
      padding: 5px 10px;
      font-size: 18px;
      cursor: pointer;
      &:hover {
        border-color: #ccc;
        background-color: #f9f9f9;
      }
    }

    p {
      padding: 30px 0;
    }
  }
</style>
