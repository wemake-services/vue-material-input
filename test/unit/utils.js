import Vue from 'vue'

export function getComponent (Component, propsData, dependencies) {
  if (dependencies) {
    for (let dep of dependencies) {
      Vue.use(dep)
    }
  }
  const Ctor = Vue.extend(Component)
  return new Ctor(
    {
      propsData
    }
  ).$mount()
}
