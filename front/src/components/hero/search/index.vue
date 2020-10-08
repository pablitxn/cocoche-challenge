<template>
  <form class="search">
    <div class="search__container-inputs">
      <div class="search__form-input">
        <span>Ciudad</span>
        <input placeholder="Ejemplo: Ciudad de Buenos Aires, Argentina" />
      </div>
      <a-divider type="vertical" />
      <div class="search__form-input">
        <span>Retiro</span>
        <input placeholder="Fecha no seleccionada" />
      </div>
      <a-divider type="vertical" />
      <div class="search__form-input">
        <span>Entrega</span>
        <input placeholder="Fecha no seleccionada" />
      </div>
    </div>
    <button class="search__submit">Buscar</button>
  </form>
</template>

<script>

</script>

<style lang="scss">

.search {
  display: flex;
  width: 80%;
  padding: 0.5rem;
  height: 5vh;
  background-color: white;
  border-radius: 5px;

  &__container-inputs {
    display: flex;
    flex-direction: rows;
    width: 100%;
  }

  &__form-input {
    width:100%;

    & span {
      display: flex;
      justify-content: flex-start;
      font-size: 0.7rem;
      font-weight: 600;
    }
    & input {
      width:100%;
      height: 2rem;
      border: none;
    }
  }

  &__submit {
    padding: 0 5rem;
    margin: 0.5rem 0;
    background-color: #28B6F6;
    color: whitesmoke;
    font-weight: 600;
    border-radius: 5px;
    border: none;
  }
}

</style>