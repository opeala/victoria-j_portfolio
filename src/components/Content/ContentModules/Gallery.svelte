<script>
    export let gallery = [];
    import { open } from '../../../data/stores.js';
    import { modalInner } from '../../../data/stores.js';

    function openClose(e) {
		open.set(true);
        const modalImage = e.target.dataset.fullimage;
        const modalImageAlt = e.target.alt;

        const imageContainer = `
        <div class="image-container relative">
            <img 
                src="${modalImage}" 
                alt="${modalImageAlt}" 
                title="${modalImageAlt}" 
                class="rounded relative z-10">
            <span class="image-loader"></span>
        </div>`;

        modalInner.set(imageContainer)
	}
    
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<div id="gallery-container" class="">
    <h2 class="text-center font-bold mb-4">
        Click on a thumbnail to see the full size image.
    </h2>
    <div id="gallery-thumbnails" class="flex flex-wrap w-full justify-between gap-3">
        {#each gallery as picture}
            <img 
                src="{picture.thumbnail}" 
                data-fullImage="{picture.fullImage}"
                alt="{picture.alt}" 
                title="{picture.alt}" 
                role="button"
                on:click={openClose}
                class="cursor-pointer transform hover:scale-105 transition-all  md:max-h-36 max-h-24">
        {/each}
    </div>
</div>

<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style lang="scss">
    @import '../../../styles/vars.scss';
</style>