<template>
  <div class="login">
    <header class="login__header">
      <h1 class="login__title">Iniciar sesión</h1>
    </header>
    <form noValidate autoComplete="off" class="login__form">
        <input class="login__input" type="email" placeholder="Mail"/>
        <input class="login__input" type="password" placeholder="Contraseña" />
      <div class="login__actions">
        <a href="#" class="login__action--anchor">¿Olvidaste tu contraseña?</a>
        <button type="submit" class="login__action--primary">Iniciar sesión</button>
        <button class="login__action--secondary">¿No tienes una cuenta?</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss">

.login {
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
    }

    &__actions {
      margin: 1rem 0 2rem 0;
      display: flex;
      gap: 30px;
      flex-direction: column;
      place-items: center;
    }

    &__action {
      &--anchor {
        width: 100%;
        color: #2EB5E4;
        font-weight: 600;
        text-decoration: none;
      }

      &--primary {
        width: 100%;
        background-color: #2EB5E4;
        border: none;
        border-radius: 5px;
        color: white;
        font-weight: 600;
        padding: 0.5rem 1rem;
      }

      &--secondary {
        width: 100%;
        background-color: #fafafa;
        border: 1px solid #2EB5E4;
        border-radius: 5px;
        color: black;
        font-weight: 600;
        padding: 0.5rem 1rem;
      }
    }
  }
</style>