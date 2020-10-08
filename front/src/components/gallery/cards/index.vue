<template>
  <div class="cards-container">
    <Card :data="cars[0]" />
    <Card :data="cars[1]" />
    <Card :data="cars[2]" />
    <Card :data="cars[3]" />

    <Card :data="cars[4]" />
    <Card :data="cars[5]" />
    <Card :data="cars[6]" />
    <Card :data="cars[7]" />
  </div>

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

<style>
  .cards-container {
      display: grid;
      grid-template: 1fr 1fr / repeat(4, 1fr) ;
      gap: 3rem;
      padding: 2rem;
  }
</style>