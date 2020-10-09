<template>
  <div class="about">
    <div class="card">
      <img class="card__icon" src="https://www.flaticon.com/svg/static/icons/svg/1276/1276415.svg" alt="hand-icon"/>
      <h3 class="card__title">ELEGI UN AUTO</h3>
      <span class="card__description" >Acorde a tus intereses</span>
    </div>

    <div class="card">
      <img class="card__icon" src="https://www.flaticon.com/svg/static/icons/svg/88/88591.svg" alt="licence-icon"/>
      <h3 class="card__title">RETIRA EL AUTO</h3>
      <span class="card__description" >VIAJA SEGURO</span>
    </div>

    <div class="card">
      <img class="card__icon" src="https://www.flaticon.com/svg/static/icons/svg/1085/1085966.svg" alt="car-icon"/>
      <h3 class="card__title">VIAJA SEGURO</h3>
      <span class="card__description">Cocoche cuenta con un seguro todo riesgo y tiene un deposito en la tarjeta como garantía.</span>
    </div>

    <div class="card">
      <img class="card__icon" src="https://www.flaticon.com/svg/static/icons/svg/271/271035.svg" atl="credit-card-icon"/>
      <h3 class="card__title" >REALIZA EL PAGO</h3>
      <span class="card__description">Abonas el costo del alquiler</span>
    </div>
  </div>
</template>

<script>
/** */
</script>

<style lang="scss">

  .about {
    display: flex;
    justify-content: space-around;
    padding: 2rem
  }

  .card{
    background-color: whitesmoke;
    width: 360px;
    height: 390px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    &__icon {
      margin: 2.5rem 0 1rem 0;
      padding: 1rem;
      height: 7rem;
      width: 7rem;
      background-color: rgba(128, 128, 128, 0.185);
      border-radius: 50%;
    }

    &__title {
      margin-bottom: 0.5rem;
    }

    &__description {
      font-weight: 300;
      padding: 1rem;
      color: gray;
    }
  }

</style>