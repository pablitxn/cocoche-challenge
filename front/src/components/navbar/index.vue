<template>
  <div class="navbar">
    <img class="navbar__logo" src="https://web.archive.org/web/20180903011230im_/https://cocoche.com.ar/images/sin_letras.png" />
    <div class="navbar__actions">
      <button class="navbar__action--highlighted">Publicar mi auto</button>
      <button class="navbar__action">Buscar un auto</button>
      <button class="navbar__action">Buscar en el mapa</button>
      <button class="navbar__action">Ayuda</button>
      <button class="navbar__action">Registrate</button>
      <button class="navbar__action">Iniciar sesión</button>
    </div>
  </div>
</template>

<script>
/** */
</script>

<style lang="scss">

.navbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6vh;

  &__logo {
    margin-left: 2rem;
    height: 100%;
}
  &__actions{
    display: flex;
    place-content: center;
    place-items: center;
  }

  &__action {
    display: flex;
    border: none;
    background-color: transparent;
    height: 30px;
    place-content: center;
    font-weight: 600;
    place-items: center;
    padding: 1.5rem;


    &--highlighted{
      background-color: #28B6F6;
      color: whitesmoke;
      font-weight: 600;
      border: none;
      border-radius: 5px;
      padding: 0.5rem 1rem;
    }

  }
}


</style>