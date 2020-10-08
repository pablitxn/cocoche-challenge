<template>
  <div class="card" >
    <img src="https://test-bucket-luciano.s3.amazonaws.com/1545495063009" class="card__image"/>
    <div class="card__brief-description">
      <span>puertas</span>
      <img src="https://www.flaticon.com/svg/static/icons/svg/694/694073.svg" />
      <span>nafta</span>
    </div>
    <div class="card__full-description">
      <h3 class="card__price">$100</h3>
      <span class="card__car-info">Fiat duna</span>
      <span class="card__location-info">villa carlos paz</span>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>

.card{

  &__image{
    width: 100%;
    background-color: gray;
  }

  &__brief-description{
    width: 100%;
    height: 30px;
    background-color: #28B6F6;
  }

  &__full-description{
    height: 100%;
  }
}

</style>