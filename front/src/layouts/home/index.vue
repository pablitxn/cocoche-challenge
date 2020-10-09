<template>
  <div class="layout">
    <header>
      <Navbar />
    </header>
    <main class="main">
        <Hero />
        <About />
        <Gallery :cars="cars"/>
    </main>
    <footer class="footer">
      Cocoches 2020
    </footer>

    <Modal />
  </div>
</template>

<script>
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import About from "../../components/about";
import Gallery from "../../components/gallery";
// import Register from "../../components/auth/register"
// import LogIn from "../../components/auth/login"
import Modal from "../../components/_shared/modal"

export default {
  name: "HomeLayout",
  components: {
    Navbar,
    Hero,
    About,
    Gallery,
    Modal,
  },
  props: ['cars']
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
