<template>
  <div v-bind="modalState" v-if="modalState.open" class="paper">
    <div class="modal">
      <div class="modal__action">
        <span @click.prevent="handleModal">X</span>
      </div>
      <div>
        <LoginForm v-bind="modalState" v-if="modalState.login"/>
        <RegisterForm v-bind="modalState" v-if="modalState.register"/>
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
  props: ['modalState'],
  methods: {
    handleModal: function(){
      this.modalState.open = false;
      this.modalState.register = false;
      this.modalState.login = false;
      return
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
    background-color: #fafafa;

    &__action {
      display: flex;
      justify-content: end;
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