import { computed } from 'vue'
import { useStore } from 'vuex'

export default function CCounter() {
  const store = useStore()
  const counter = computed(() => store.state.count)
  const increment = () => {
    store.commit('increment')
  }
  const decrement = () => {
    store.commit('decrement')
  }

  const reset = () => {
    store.commit('reset')
  }

  const newValue = (value) => {
    store.commit('newValue', value)
  }
  return {
    counter,
    increment,
    decrement,
    reset,
    newValue,
  }
}
