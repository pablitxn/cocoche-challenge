<template>
  <div class="layout">
    <header>
      <Navbar :handleModal="alerts.modal"/>
    </header>
    <main class="main">
        <Hero />
        <About />
        <Gallery :cars="cars" :pagination="pagination" :handlePagination="handlePagination"/>
    </main>
    <footer class="footer">
      Cocoches 2020
    </footer>

    <Modal :handleModal="alerts.modal" :handleRegister="handleRegister"/>
    <Alert :handleAlert="alerts.alert"/>
  </div>
</template>

<script>
import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Gallery from "../components/gallery/gallery";
import Modal from "../components/_shared/auth-modal";
import Alert from "../components/_shared/alert";
import rentCarServices from "../services/rent-car"

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
  props: ['cars', 'handleRegister', 'alerts', 'pagination', 'handlePagination']
}
</script>

<style lang="scss">
  body {
    margin: 0;
    background-color: #fafafa;
  }

  .layout {
    padding: 0 3rem;

    & .main {
      width: 100%;
    }

    & .footer {
    width:100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ac909062;
  }
}
</style>
