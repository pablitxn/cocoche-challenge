<template>
  <div class="layout">
    <header>
      <Navbar :modalState="modalState"/>
    </header>
    <main class="main">
        <Hero />
        <About />
        <Gallery :cars="cars" :pagination="pagination"/>
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
  props: ['cars', 'handleRegister'],
  data(){
    const elementsPerPage = 8;
    const totalPages = Math.ceil(this.cars.length / elementsPerPage);

    async function handlePagination(page) {
      try {
        console.log("pagination, ", page)
        const data = await rentCarServices.getFordCars()
      } catch(err) {
        /** Alert  */
        console.log(err)
      }
    }

    return {
      modalState: {
        open: false,
        register: false,
        login: false,
        alert: false,
        alertType: "email-used"
      },
      pagination: {
        handlePagination,
        currentPage: 1,
        prevPage: 0,
        totalPages
      },
    }
  }
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
