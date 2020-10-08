<template>
  <div class="about" >
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</template>

<script>
import Card from "./card"

export default {
  name: "About",
  components: {
    Card
  }
}

</script>

<style lang="scss" scoped>

.about {
  display: flex;
  gap: 5rem;
  flex-direction: row;
  background-color: white;
  place-content: center;
  margin: 2rem;
}

</style>