<!-- App.svelte -->
<script>
  /* component logic will go here */
  import Navbar from "./components/Navbar/Navbar.svelte";
  import DATA from "./data/data";
  console.log(DATA);

  console.log('ITS WORKING')
</script>
<style lang="scss">

  /* .App {
      background: red;
      .App-header {
          padding: 10px;
          .App-link {
              font-size: 50px;
          }
      }
  }

  P {
    color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
  } */
</style>

<Navbar navlists={DATA.NAVBAR_DATA} header={DATA.HEADER} header_image={DATA.HEADER_IMAGE} />

<p>
  hello
</p>
