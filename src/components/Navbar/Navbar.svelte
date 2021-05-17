<script>
  export let navlists = [];
  export let header;
  export let header_image;
  console.log(navlists);

  let mobileMenu = {  visibile: false };

	function mobileToggle() {
		mobileMenu.visibile = !mobileMenu.visibile;
	}
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="nav-bar" class="bg-cover bg-center bg-no-repeat sticky top-0 z-10" style="background-image: url({header_image});">
  <nav class="flex flex-col justify-start items-center py-4">
    <a class="" href="/">
      <h1 class="md:text-9xl text-5xl text-white text-center">
        {header}
      </h1>
    </a>
    <button class="block md:hidden text-2xl font-bold text-white uppercase text-center" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" on:click={mobileToggle}>
      menu
    </button>
    <div class="relative w-full" id="navbarNav">
      <ul class="flex md:flex-row flex-col items-center justify-around md:mt-8 mt-5 md:transform-none transform origin-top transition-all overflow-hidden md:relative absolute top-0 right-0 left-0 w-min mx-auto {!mobileMenu.visibile ? 'scale-y-0' : ''}">
        {#each navlists as list}
          <li class="w-full text-center md:bg-transparent bg-pink-500 md:mb-0 mb-0.5 md:p-0 py-1 px-2">
            <a class="md:text-4xl text-xl font-bold text-white uppercase md:mx-12 text-center w-full" href={list.url}>
              {list.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style lang="scss">
  @import '../../styles/vars';

  #nav-bar {
    nav {
      background: rgba($theme-color, 0.79);
    }
  }
</style>