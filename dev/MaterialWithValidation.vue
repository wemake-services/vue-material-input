<template>
  <form class="material-validation-form">
    <a href="#">back</a>

    <MaterialInput
      name="validated-name"
      :minlength="4"
      :maxlength="10">Your name (from 4 to 10 chars)</MaterialInput>

    <MaterialInput
      name="regex-validation"
      :required="false"
      :pattern="pattern">This field must contain a dot</MaterialInput>

    <MaterialInput
      name="no-validation"
      :required="false">This field is not required</MaterialInput>

    <input class="material-validation-form-submit" type="submit" value="Submit">
  </form>
</template>

<script>
  import MaterialInput from '../src/components/MaterialInput.vue'

  module.exports = {
    name: 'material-with-validation',
    data () {
      return {
        pattern: {regex: /\./, message: 'The dot is required'}
      }
    },
    components: {
      MaterialInput
    }
  }
</script>

<style lang="scss">
  .material-validation-form {
    max-width: 300px;
    display: block;
    margin: 50px auto;

    p {
      padding: 30px 0;
    }

    .material-validation-form-submit {
      margin-top: 15px;
    }
  }
</style>
