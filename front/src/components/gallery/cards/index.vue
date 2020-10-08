<template>
  <article v-for="car in cars" :key="car.carId">
    <Card :car="car"/>
  </article>
</template>

<script>
import Card from "./card"

export default {
  name: "Cards",
  components: {
    Card
  },
  props: ['cars']
}
</script>
