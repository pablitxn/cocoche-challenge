<template>
  <div class="card">
    <!-- <img class="card__icon" /> -->
    <div class="card__icon" />
    <h3 class="card__title" >TITULO</h3>
    <span class="card__description" >lorem peronistum</span>
  </div>
</template>

<script>
/** */
</script>

<style lang="scss" scoped>

  .card{
    background-color: whitesmoke;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__icon {
      margin: 2.5rem 0 1rem 0;
      height: 7rem;
      width: 7rem;
      background-color: gray;
      border-radius: 50%;
    }

    &__title {
      margin-bottom: 0.5rem;
    }

    &__description {
      font-weight: 300;
      color: gray;
    }
  }

</style>