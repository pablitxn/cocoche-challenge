<template>
  <div class="card">
    <!-- <img v-bind:src="data.imageUrl" alt="foto-del-anuncio" class="card__image"/> -->
    <div class="card__brief-description">
      <img src="https://www.flaticon.es/svg/static/icons/svg/1672/1672795.svg"  alt="icono-puerta" class="card__icon">
      <span>puertas</span>
      <img src="https://www.flaticon.com/svg/static/icons/svg/3267/3267101.svg"  alt="icono-combustible" class="card__icon" />
      <span>nafta</span>
    </div>
    <div class="card__full-description">
      <h3 class="card__price">$&nbsp;100</h3>
      <span class="card__car-info">FIAT FIORINO FURGON 1,4 EVO TOP</span>
      <span class="card__location-info">Villa Carlos Paz, Córdoba, Argentina</span>
    </div>
  </div>
</template>

<script>



export default {
  props: {
    car: Object
  },
  data () {
    console.log("card scope", this.car)

    return{

    }
  }
}

</script>

<style lang="scss" scoped>

.card{
  background-color: white;
  width: 420px;

  &__image{
    width: 100%;
    background-color: gray;
  }

  &__icon {
    width: 1rem;
    color: white;
  }

  &__brief-description{
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 1rem;
    height: 30px;
    gap: 5px;
    background-color: #28B6F6;
    color: white;
  }

  &__full-description{
    display: flex;
    align-items: start;
    flex-direction: column;
    height: 100%;
    padding: 0 1rem 1rem 1rem;
  }

  &__price {
    font-size: 2rem;
    margin: 1rem 0 0.5rem;
  }

  &__car-info {
    color: #28B6F6;
    margin-bottom: 0.5rem;
  }

  &__location-info {
    color: gray;
  }
}

</style>