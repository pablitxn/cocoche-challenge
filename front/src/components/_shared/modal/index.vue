<template>
  <div class="paper">
    <div class="modal">
      <div>
        <span>cerrar</span>
      </div>
      <div>
        <!-- <LoginForm :v-if="login"/> -->
        <!-- <RegisterForm :v-if="register"/> -->
        <RegisterForm />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../../auth/login"
import RegisterForm from "../../auth/register"

export default {
  name: "modal",
  components: {
    LoginForm,
    RegisterForm
  },
  props: {
    login: {
      type: Boolean
    },
    register: {
      type: Boolean
    }
  }
}

</script>

<style lang="scss">

  .paper {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.432);
    position: fixed;
    top:0;
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 480px;
    height: 600px;
    background-color: #fafafa;
  }

</style>