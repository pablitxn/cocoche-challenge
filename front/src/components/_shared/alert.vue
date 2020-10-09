<template>
  <div v-bind="modalState" v-if="modalState.alert" class="paper-alert">
    <div class="alert">
      <div class="alert__action">
        <span @click.prevent="closeAlert">X</span>
      </div>
      <div class="alert__content">
        <p>{{ handleMsg() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../auth/login-form";
import RegisterForm from "../auth/register-form";

export default {
  name: "modal",
  components: {
    LoginForm,
    RegisterForm
  },
  props: ['modalState', 'handleRegister'],
  methods: {
    closeAlert: function() {
      this.modalState.alert = false;
      this.modalState.alertType = "";
      return
    },
    handleMsg: function() {
      switch(this.modalState.alertType) {
        case "email-used":
          return "Este correo ya tiene una cuenta asociada, ¿Desea recuperar su contraseña?"
        case "error-fetch":
          return "No se pudieron recuperar datos, por favor aguarde un momento."
        case "success":
          return "La cuenta fue creada. Revisá tu email para validarla."
      }
    }
  }
}
</script>

<style lang="scss">
  .paper-alert {
    width: 100vw;
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: 0);
    position: fixed;
    top:0;
    z-index: 4;
    display: flex;
    justify-content: center;
  }

  .alert {
    margin-top: 2rem;
    width: 480px;
    height: 130px;
    background-color: #91d8f8;

    &__action {
      display: flex;
      justify-content: flex-end;
      font-weight: 600;
      color: gray;
      margin: 0 2rem 0 0;
      padding: 0.5rem 0;

      & span{
        cursor: pointer;
      }
    }

    &__content {
      width: 100%;
      color: black;
      border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
      padding: 1rem 0;
    }
  }
</style>