<template>
  <div class="whole">
    <div class="new">
      <h1>Counter: {{ counter }}</h1>
      <div class="buttons">
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="reset">Reset</button>
      </div>

      <div class="inputs">
        <input type="number" v-model="value" />
        <input type="submit" @click="newValue(value)" value=" new Value" />
      </div>
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
<style scoped>
.whole {
  display: flex;
  justify-content: center;
  flex-direction: column;

  height: 100vh;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(
    0deg,
    rgba(224, 182, 227, 1) 0%,
    rgba(123, 213, 223, 1) 100%
  );
}
.new {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

.new h1 {
  font-size: 50px;
  color: white;
}
.buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  border: none;
  outline: none;
}
.buttons button {
  padding: 15px;
  font-size: 16px;
  font-weight: bolder;
  outline: none;
  margin-right: 15px;
  border: none;
  outline: none;
}
.inputs {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
}
.inputs input {
  padding: 15px;
  font-size: 16px;
  font-weight: bolder;
  margin-right: 5px;
  border: none;
  outline: none;
}
</style>
