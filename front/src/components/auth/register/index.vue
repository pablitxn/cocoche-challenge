<template>
  <div class="register">
    <header class="register__header">
      <h1 class="register__title">Cuenta personal</h1>
      <button class="register__action--primary">Cambiar a empresa</button>
    </header>
    <form noValidate autoComplete="off" class="register__form">
        <input class="register__input" placeholder="Nombre"/>
        <input class="register__input" placeholder="Apellido"/>
        <input class="register__input--date" type="datetime" placeholder="&nbsp;📅&nbsp;Fecha no seleccionada"/>
        <input class="register__input" placeholder="Contraseña"/>
        <input class="register__input" placeholder="Repetir contraseña" />
      <div class="register__actions">
        <button class="register__action--secondary">Volver</button>
        <button type="submit" class="register__action--primary">Crear cuenta</button>
      </div>
    </form>
    <footer class="register__footer">Al registrar su cuenta, acepta nuestro <span>Contrato de servicio</span></footer>
  </div>
</template>

<script>
/** */
</script>

<style lang="scss">

  .register {
    padding: 1rem 2rem;

    &__header {
      display: flex;
      flex-direction: column;
      place-content: center;
      place-items: center;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    &__title {
      margin-bottom: 1rem;
      font-weight: 600;
    }

    &__form {
      display: flex;
      flex-direction: column;
    }

    &__input {
      margin: 1rem 0;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      height: 2rem;
      background-color: #fafafa;

      &--date {
        margin: 1rem 0;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        height: 1.7rem;
      }
    }

    &__actions {
      margin: 1rem 0 2rem 0;
      display: flex;
      place-content: center;
      gap: 30px;
    }

    &__action {
      &--primary {
        background-color: #2EB5E4;
        border: none;
        border-radius: 5px;
        color: white;
        font-weight: 600;
        padding: 0.5rem 1rem;
      }

      &--secondary {
        background-color: #fafafa;
        border: 1px solid #2EB5E4;
        border-radius: 5px;
        color: black;
        font-weight: 600;
        padding: 0.5rem 1rem;
      }
    }

    &__footer {
      font-size: 0.9rem;
      color: gray;

      & span {
        font-weight: 600;
        color: #2EB5E4;
      }
    }
  }

</style>