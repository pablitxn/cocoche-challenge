<template>
  <div class="cards">
    <div :v-bind="cars" v-for="(car, i) in cars" class="gallery-card" :key="i">
      <img :src="car.imageUrl" alt="foto-del-anuncio" class="gallery-card__image"/>
      <div class="gallery-card__brief-description">
        <img src="https://www.flaticon.es/svg/static/icons/svg/1672/1672795.svg" alt="icono-puerta" class="gallery-card__icon">
        <span>{{ car.doors }}&nbsp;Puertas</span>
        <img src="https://www.flaticon.com/svg/static/icons/svg/3267/3267101.svg" alt="icono-combustible" class="gallery-card__icon" />
        <span>{{ car.fuelType }}</span>
      </div>
      <div class="gallery-card__full-description">
        <h3 class="gallery-card__price">$&nbsp;{{ car.cost }}</h3>
        <span class="gallery-card__car-info">{{ car.title.toUpperCase() }}</span>
        <span class="gallery-card__location-info">{{ car.placeDescription }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: ['cars']
}
</script>

<style lang="scss">
  .cards {
      display: grid;
      grid-template: 1fr 1fr / repeat(4, 1fr);
      gap: 3rem;
      padding: 2rem;
  }

  .gallery-card{
    background-color: white;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.445);

    &__image{
      width: 100%;
      height: 420px;
      border-radius: 10px 10px 0 0;
      background-color: gray;
      object-fit: cover;
      margin:0;
    }

    &__icon {
      width: 1rem;
      color: white;
    }

    &__brief-description{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 1rem;
      height: 30px;
      gap: 5px;
      background-color: #28B6F6;
      color: white;
    }

    &__full-description{
      display: flex;
      align-items: flex-start;
      flex-direction: column;
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