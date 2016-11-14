import { play } from 'vue-play'

import Model from './components/Model.vue'
import Constructor from './components/Constructor.vue'
import InputTypes from './components/InputTypes.vue'
import Validate from './components/Validation.vue'

play('MaterialInput', module)
  .add('v-model', Model)
  .add('constructor', Constructor)
  .add('input types', InputTypes)
  .add('validation', Validate)
