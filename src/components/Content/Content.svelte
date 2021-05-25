<script>
    import Youtube from "./ContentModules/Youtube.svelte";
    import Copy from "./ContentModules/Copy.svelte";
    import Gallery from "./ContentModules/Gallery.svelte";

    export let content = [];

    content.forEach((el) => {
        document.body.dataset.page == el.name && (content = el.content);
    })
    console.log('page content:')
    console.log(content)

</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="content-section" class="w-full z-20">
    <main class="max-w-screen-lg mx-auto relative md:pt-8 pt-4 md:px-0 px-2">
        <!-- YOUTUBE VIDEO -->
        {#if content[0].youtubeVideo}
            <Youtube imagePlaceholder={content[0].youtubePlaceholder} video={content[0].youtubeVideo} title={content[0].title}/>
        {/if}

        {#if content[0].copy}
            <Copy title={content[0].copy[0].title} paragraphs={content[0].copy[0].paragraphs} />
        {/if}

        {#if content[0].gallery}
            <Gallery gallery={content[0].gallery} />
        {/if}
    </main>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style lang="scss">
    @import '../../styles/vars';

    #content-section {
        main {
            padding-bottom: calc(8.4% + 0.75rem);
        }
    }
</style>