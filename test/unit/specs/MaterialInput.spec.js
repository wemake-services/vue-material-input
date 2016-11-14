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

  // Classes

  it('returns correct default computedClasses', () => {
    expect(component.computedClasses).to.deep.equal([])
  })

  it('returns correct computedClasses with placeholder', () => {
    const placeholder = getComponent(MaterialInput, {
      placeholder: 'placeholder'
    })

    expect(placeholder.computedClasses).to.deep.equal([
      'material-input--has-placeholder'
    ])
  })

  it('returns correct computedClasses with value', () => {
    const both = getComponent(MaterialInput, {
      value: 'some',
      placeholder: 'placeholder'
    })

    // placeholder should no exist in the result classes
    expect(both.computedClasses).to.deep.equal([
      'material-input--has-value'
    ])
  })

  it('returns correct computedClasses with errors', () => {
    const errors = getComponent(MaterialInput, {
      errorMessages: ['Error']
    })

    expect(errors.computedClasses).to.deep.equal([
      'material-input--has-errors'
    ])
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
})
