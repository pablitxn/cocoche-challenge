<template>
  <div v-bind="handleModal" v-if="handleModal.modalOpen" class="paper-modal">
    <div class="modal">
      <div class="modal__action">
        <span @click.prevent="closeModal">X</span>
      </div>
      <div>
        <LoginForm v-bind="handleModal" v-if="handleModal.login"/>
        <RegisterForm
          v-bind="handleModal"
          v-if="handleModal.register"
          :handleModal="handleModal"
          :handleRegister="handleRegister"
        />
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
  props: ['handleModal', 'handleRegister'],
  methods: {
    closeModal: function(){
      this.handleModal.modalOpen = false;
      this.handleModal.register = false;
      this.handleModal.login = false;
      return
    }
  }
}
</script>

<style lang="scss">
  .paper-modal {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.432);
    position: fixed;
    top:0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 480px;
    background-color: #fafafa;

    &__action {
      display: flex;
      justify-content: flex-end;
      font-weight: 600;
      color: gray;
      margin: 0 2rem 0 0;
      padding-top: 1rem;

      & span{
        cursor: pointer;
      }
    }
  }
</style>