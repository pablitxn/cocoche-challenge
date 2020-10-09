<template>
  <div class="layout">
    <header>
      <Navbar :modalState="modalState"/>
    </header>
    <main class="main">
        <Hero />
        <About />
        <Gallery :cars="cars"/>
    </main>
    <footer class="footer">
      Cocoches 2020
    </footer>

    <Modal :modalState="modalState" :handleRegister="handleRegister"/>
    <Alert :modalState="modalState"/>
  </div>
</template>

<script>
import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Gallery from "../components/gallery/gallery";
import Modal from "../components/_shared/auth-modal";
import Alert from "../components/_shared/alert";

export default {
  name: "HomeLayout",
  components: {
    Navbar,
    Hero,
    About,
    Gallery,
    Modal,
    Alert
  },
  props: ['cars', 'handleRegister'],
  data(){
    return {
      modalState: {
        open: false,
        register: false,
        login: false,
        alert: true,
        alertType: "email-used"
      },
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    background-color: #fafafa;
  }

  .layout {
    padding: 0 3rem;
  }

  .main {
    width: 100%;
  }

  .footer {
    width:100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ac909062;
  }
</style>
