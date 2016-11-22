import Vue from 'vue'

import MaterialInput from 'components/MaterialInput'
import {getComponent} from '../utils'

describe('MaterialInput.vue', () => {
  let component

  beforeEach(() => {
    component = getComponent(MaterialInput, {})
  })

  // Inputs

  it('renders correct default input type', () => {
    expect(component.$el.querySelector('input').type)
      .to.equal('text')
  })

  it('renders correct custom input type', () => {
    const inst = getComponent(MaterialInput, {type: 'number'})
    expect(inst.$el.querySelector('input').type)
      .to.equal('number')
  })

  // Values

  it('copies the value when provided', () => {
    const inst = getComponent(MaterialInput, {value: 'some'})
    expect(inst.value).to.equal('some')
    expect(inst.value).to.equal(inst.valueCopy)
  })

  it('watches for the value', (done) => {
    const inst = getComponent(MaterialInput, {value: 'some'})
    const other = 'other'
    inst.value = other

    Vue.nextTick(() => {
      expect(inst.valueCopy).to.equal(other)

      done()
    })
  })

  // Classes

  it('returns correct default computedClasses', () => {
    expect(component.computedClasses).to.deep.equal({
      'material--active': false,
      'material--disabled': false,
      'material--has-errors': false,
      'material--raised': false
    })
  })

  it('returns correct computedClasses with placeholder', () => {
    const placeholder = getComponent(MaterialInput, {
      placeholder: 'placeholder'
    })

    expect(placeholder.computedClasses).to.deep.equal({
      'material--active': false,
      'material--disabled': false,
      'material--has-errors': false,
      'material--raised': true
    })
  })

  it('returns correct computedClasses with errors', () => {
    const errors = getComponent(MaterialInput, {
      errorMessages: ['Error']
    })

    expect(errors.computedClasses).to.deep.equal({
      'material--active': false,
      'material--disabled': false,
      'material--has-errors': true,
      'material--raised': false
    })
  })

  // Focus

  it('handles focus', () => {
    expect(component.focus).to.equal(false)

    component.handleFocus(true)
    expect(component.focus).to.equal(true)
  })

  // Events

  it('emits input event', () => {
    let test = null
    const passed = true

    component.$on('input', (value) => {
      test = value
    })

    component.handleModelInput({
      target: {value: passed}
    })

    expect(test).to.equal(passed)
  })

  // Validation

  it('sets valid state on valid input', () => {
    const inst = getComponent(MaterialInput, {
      required: false
    })

    const input = inst.$el.querySelector('input')
    expect(input.validity.valid).to.equal(true)
  })

  it('sets invalid state on invalid input', () => {
    const inst = getComponent(MaterialInput, {
      required: true,
      type: 'email'
    })

    const input = inst.$el.querySelector('input')
    expect(input.validity.valid).to.equal(false)
  })

  it('returns correct computedErrors', () => {
    // Array:
    const errors = ['Error']
    const listErrors = getComponent(MaterialInput, {
      errorMessages: errors
    })

    expect(listErrors.computedErrors).to.deep.equal(errors)

    // String:
    const error = 'Some error'
    const strErrors = getComponent(MaterialInput, {
      errorMessages: error
    })

    expect(strErrors.computedErrors).to.deep.equal([
      error // returns as a list
    ])
  })
})
