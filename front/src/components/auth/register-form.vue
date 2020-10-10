<template>
  <div class="register">
    <header class="register__header">
      <h1 class="register__title">Cuenta personal</h1>
      <button class="register__action--primary">Cambiar a empresa</button>
    </header>
    <form v-on:submit.prevent="handleSubmit" noValidate autoComplete="off" class="register__form">
        <input
          v-model="name"
          class="register__input"
          placeholder="Nombre"
        />
        <input
          v-model="phone"
          type="number"
          class="register__input"
          placeholder="Phone"
        />
        <input
        v-model="email"
        id="email"
        @blur="validateEmail"
        class="register__input" placeholder="Correo electrónico"
        />
        <input
        id="password"
        v-model="password"
        @blur="validatePassword"
        type="password"
        class="register__input" placeholder="Contraseña"
        />
        <input
        v-model="repeatPass"
        id="password"
        type="password"
        @blur="validatePassword"
        class="register__input"
        placeholder="Repetir contraseña"
        />
      <div class="register__actions">
        <button class="register__action--secondary">Volver</button>
        <button type="submit" class="register__action--primary">Crear cuenta</button>
      </div>
      <div>
        <span class="form-output hidden" v-html="error"></span>
      </div>
    </form>
    <footer class="register__footer">Al registrar su cuenta, acepta nuestro <span>Contrato de servicio</span></footer>
  </div>
</template>

<script>
export default {
  name: "Register",
  props: ['handleModal', 'handleRegister'],
  methods: {
    handleSubmit: function() {
      const { password, repeatPass, validateEmail } = this;
      if(password === repeatPass && validateEmail()){
        this.handleRegister({
          name: this.name,
          phone: parseInt(this.phone, 10),
          email: this.email
        })
      }
    },
    validateEmail() {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/

      if (this.email == null || this.email === "" || !regex.test(this.email)) {
        document.querySelector("#email").style.borderBottom = "1px solid red";
        return false
      } else {
        document.querySelector("#email").style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
        return true
      }
    },
    validatePassword() {
      if(this.password === this.repeatPass){
        document.querySelector("#password").style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
      } else {
        document.querySelector("#password").style.borderBottom = "1px solid red";
      }
    }
  }
}
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