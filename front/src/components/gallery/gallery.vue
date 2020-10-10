<template>
  <div class="gallery">
    <header class="gallery__title">
      <h1>Destacados</h1>
    </header>
    <section class="gallery__content">
      <Cards :cars="cars" />
    </section>
    <div class="gallery__pagination">
      <Pagination :pagination="pagination" :handlePagination="handlePagination" :cars="cars" />
    </div>
  </div>
</template>

<script>
import Cards from "./cards"
import Pagination from "./pagination"

export default {
  name: "Gallery",
  components: {
    Cards,
    Pagination
  },
  props:['cars', 'pagination', 'handlePagination']
}
</script>

<style lang="scss">
  .gallery{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color:#F4F4F4;
    padding: 2rem 0;

    &__title {

      h1{
        display: inline;
        padding: 0.2rem 2rem;
        border: 8px double rgba(0, 0, 0, 0.459);
      }
    }

    &__content {
      display: flex;
      flex-direction: row;
      place-content: center;
      flex-wrap: wrap;
      gap: 5rem;
    }

    &__pagination {

    }
  }

</style>