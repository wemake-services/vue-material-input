import MaterialInput from 'components/MaterialInput'
import {getComponent} from '../utils'

describe('MaterialInput.vue', () => {
  let component

  beforeEach(() => {
    component = getComponent(MaterialInput, {})
  })

  it('renders correct default input type', () => {
    expect(component.$el.querySelector('input').type)
      .to.equal('text')
  })

  it('renders correct custom input type', () => {
    const inst = getComponent(MaterialInput, {type: 'number'})
    expect(inst.$el.querySelector('input').type)
      .to.equal('number')
  })

  it('copies the value when provided', () => {
    const inst = getComponent(MaterialInput, {value: 'some'})
    expect(inst.value).to.equal('some')
    expect(inst.value).to.equal(inst.valueCopy)
  })

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

  it('sets valueCopy to be equal to passed value', () => {
    const inst = getComponent(MaterialInput, {value: 'some'})
    expect(inst.valueCopy).to.equal('some')
  })

  it('sets valid state on valid input', () => {
    const inst = getComponent(MaterialInput, {
      required: false
    })

    const input = inst.$el.querySelector('input')
    expect(input.validity.valid).to.equal(true)
  })

  it('sets event listener when pattern prop is passed', () => {
    const inst = getComponent(MaterialInput, {
      pattern: {
        regex: /\./,
        message: 'Dot is required'
      },
      required: false
    })

    const input = inst.$el.querySelector('input')
    /* eslint-disable no-undef */
    input.dispatchEvent(new Event('input'))

    expect(input.validity.valid).to.equal(false)
  })
})
