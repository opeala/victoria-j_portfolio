<script>
    export let content = [];
    // let contentPiece;

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
        {#if content[0].youtubeVideo}
            <div class="video-container w-full relative">
                <iframe src="{content[0].youtubeVideo}?controls=0" title="YouTube video player" frameborder="0" class="w-full h-full absolute top-0 right-0 bottom-0 left-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
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
            /* background: red; */

            .video-container {
                @include responsive-ratio(16, 9);
            }

            @media (min-width: $md) {
                &:before,
                &::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    background-size: contain;
                    background-position: bottom;
                    background-repeat: no-repeat;
                    width: 420px;
                    height: 80vh;
                    z-index: 25;
                }

                &::before {
                    background-image: url(./media/images/webgirl/webgirl_crouching.png);
                    left: -420px;
                }
                &::after {
                    background-image: url(./media/images/webgirl/webgirlhips.png);
                    right: -420px;
                }
            }
        }
    }
</style>