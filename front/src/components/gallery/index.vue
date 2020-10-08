<template>
  <div class="gallery">
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</template>

<script>
import Card from "./card"

export default {
  name: "Gallery",
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>

  .gallery{
    display: flex;
    flex-direction: row;
    gap: 5rem;
    justify-content: center;
    /* justify-content: space-around; */
    width: 100%;

  }

</style>