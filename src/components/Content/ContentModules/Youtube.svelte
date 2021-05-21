<script>
    export let imagePlaceholder;
    export let video;

    // youtube placeholder functionality:
    let placeholder = { shown: false };
	function videoPlaceholderToggle() {
		placeholder.shown = !placeholder.shown;
	}
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<div id="video-container" class="w-full relative bg-white">
    {#if placeholder.shown}
        <iframe 
        src="{video}?controls=0" 
        title="YouTube video player" 
        frameborder="0" 
        loading="lazy" 
        class="w-full h-full absolute top-0 right-0 bottom-0 left-0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
        allowfullscreen></iframe>
    {/if}
    
    {#if !placeholder.shown}
        <div 
            role="button" 
            aria-label="click to reveal video"
            on:click={videoPlaceholderToggle}
            class="w-full h-full absolute top-0 right-0 bottom-0 left-0 cursor-pointer flex justify-center items-center bg-no-repeat bg-center bg-cover group"
            style="background-image: url({imagePlaceholder});">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-14 w-14 filter group-hover:drop-shadow-xl drop-shadow-lg transform group-hover:scale-105 transition-all fill-current text-white" 
                viewBox="0 0 20 20" 
                fill="currentColor">
                <path 
                    fill-rule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" 
                    clip-rule="evenodd" />
            </svg>
        </div>
    {/if}
</div>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style lang="scss">
    @import '../../../styles/vars.scss';

    #video-container {
        @include responsive-ratio(16, 9);
    }
</style>