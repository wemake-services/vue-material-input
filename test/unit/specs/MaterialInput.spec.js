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

  it('renders correct input type', () => {
    const inst = getComponent(MaterialInput, {type: 'number'})
    expect(inst.$el.querySelector('input').type)
      .to.equal('number')
  })

  it('does not render input for wrong type', () => {
    const inst = getComponent(MaterialInput, {type: 'doesnotexist'})
    expect(inst.$el.querySelector('input'))
      .to.equal(null)
  })

  it('copies the value when provided', () => {
    const inst = getComponent(MaterialInput, {value: 'some'})
    expect(inst.value).to.equal('some')
    expect(inst.value).to.equal(inst.valueCopy)
  })

  it('returns correct hasValue() result', () => {
    expect(component.hasValue).to.equal(false)

    const inst = getComponent(MaterialInput, {value: 'some'})
    expect(inst.hasValue).to.equal(true)
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
