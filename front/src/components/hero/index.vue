<template>
  <div class="hero" >
    <div class="hero__container">
      <h1 class="hero__title">Compartí tu auto, alquilá uno</h1>
      <h2 class="hero__subtitle">Alquiler de autos entre particulares en Chile y Argentina</h2>
      <div class="hero__search">
        <Search />
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./search"

export default {
  name:"Hero",
  components: {
    Search
  }
}

</script>

<style lang="scss" scoped>
  .hero {
    background-image: url(https://cocoche.com.ar/bg-base-plain.jpg);
    height: 40vh;

    &__container {
      padding-top: 4rem;
    }

    &__title {
      font-size: 2rem;
      color: whitesmoke;
      text-shadow: black 0.1rem 0.1rem 0.2rem;
    }

    &__subtitle {
      color: whitesmoke;
      text-shadow: black 0.1rem 0.1rem 0.2rem;

    }

    &__search {
      display: flex;
      justify-content: center;
    }
  }

</style>