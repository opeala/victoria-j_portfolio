<!-- App.svelte -->
<script>
  /* component logic will go here */
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Content from "./components/Content/Content.svelte";
  import Footer from "./components/Footer/Footer.svelte";
  import Modal from "./components/Modal/Modal.svelte";
  import DATA from "./data/data";

  let modalContent;
</script>
<style lang="scss">

</style>

<Navbar 
  navlists={DATA.NAVBAR_DATA} 
  header={DATA.HEADER} 
  content={DATA.CONTENT_DATA} 
/>

<Content 
  content={DATA.CONTENT_DATA} 
/>

<Footer 
  content={DATA.CONTENT_DATA} 
  socialIcons={DATA.FOOTER_DATA} 
/>

<Modal />
