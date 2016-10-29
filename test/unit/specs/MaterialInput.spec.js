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
})
