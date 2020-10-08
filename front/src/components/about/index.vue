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
    background: #f1eee9;
  place-content: center;
  padding: 2rem;
}

</style>