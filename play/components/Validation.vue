<template>
  <div class="example">
    <h1>
      Validation
    </h1>

    <form @submit.prevent="submitHTMLForm">
      <h2>
        This example uses native html5 form validation
      </h2>

      <MaterialInput
        type="text"
        :required="true">
          Your name
      </MaterialInput>

      <MaterialInput
        type="email"
        :required="true">
          Your email
      </MaterialInput>

      <button type="submit">Check</button>
    </form>

    <form @submit.prevent="submitVeeForm">
      <h2>
        This example uses
        <a href="http://vee-validate.logaretm.com/">vee-validate</a>
      </h2>

      <MaterialInput
        v-validate.initial="username"
        data-rules="required|min:5"
        :errorMessages="errors.collect('username')"
        name="username"
        v-model="username">
          Your name
      </MaterialInput>

      <MaterialInput
        v-validate.initial="email"
        data-rules="required|email"
        :errorMessages="errors.collect('email')"
        name="email"
        v-model="email">
          Your email
      </MaterialInput>

      <button type="submit">Check</button>
    </form>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  import MaterialInput from '../../src/components/MaterialInput.vue'

  export default {
    name: 'material-validation',
    data: function () {
      return {
        username: '',
        email: ''
      }
    },
    methods: {
      submitHTMLForm () {
        this.$log('Form html-native submited!')
      },
      submitVeeForm () {
        if (this.errors.any()) {
          return
        }

        this.$log('Form vee submited!')
      }
    },
    components: {
      MaterialInput
    }
  }
</script>
