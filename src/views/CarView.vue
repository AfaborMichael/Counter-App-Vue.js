<script setup>
import { useRoute, RouterView, useRouter } from 'vue-router'
import cars from '../data/cars.json'

const route = useRoute()
const router = useRouter()
const carid = parseInt(route.params.id)

const car = cars.find((c) => c.id === carid)
</script>

<template>
  <div v-if="car">
    <h1>Car Views</h1>
    {{ car }}
    <p>{{ car.name }}</p>
    <p>{{ car.year }}</p>
    <p>{{ car.price }}</p>
    <button @click="router.push(`/cars/${carid}/contact`)">Click Me</button>
    <RouterView />
  </div>
  <div v-else>Item not Found</div>
</template>
