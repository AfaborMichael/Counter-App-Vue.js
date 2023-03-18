<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
    <div>
      <input type="number" v-model="value" />
      <input type="submit" @click="newValue(value)" value=" new Value" />
    </div>
  </div>
</template>
<script>
import CCounter from '@/composable/CCounter'
export default {
  setup() {
    const { counter, increment, decrement, reset, newValue } = CCounter()
    return {
      counter,
      increment,
      decrement,
      reset,
      newValue,
      value: 0,
    }
  },
}
</script>
