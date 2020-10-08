<template>
  <div class="gallery">
    <header class="gallery__title">
      <h1>Destacados</h1>
    </header>
    <section class="gallery__content">
      <Cards :cars="cars" />
    </section>
    <div>
      <!-- <Pagination :cars="cars" /> -->
    </div>
  </div>
</template>

<script>
import Cards from "./cards"
// import Pagination from "./pagination"

export default {
  name: "Gallery",
  components: {
    Cards,
  },
  props:['cars'],
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

  .gallery{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color:#F4F4F4;
    padding: 2rem 0;

    &__title {
      border: 2px solid black;
    }

    &__content {
      /* display: flex;
      flex-direction: row;
      place-content: center;
      flex-wrap: wrap;
      gap: 5rem; */
      display: grid;
      grid-template: 1fr 1fr 1fr 1fr / 1fr 1fr;
    }
  }

</style>