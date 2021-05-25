<script>
    export let content = [];
    export let socialIcons = [];

    content.forEach((el) => {
        document.body.dataset.page == el.name && (content = el.content);
    })
    console.log('page content:')
    console.log(content)
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="footer-bar" class="bg-cover bg-center bg-no-repeat z-10 w-full fixed bottom-0"
    style="background-image: url(./media/images/banners-footers/bottom.png);">
    <footer class="w-full bg-vic-pink" style="--imageLeft: url({content[0].leftImage}); --imageRight: url({content[0].rightImage});">
        <div class="image-holder max-w-screen-lg mx-auto relative">
        </div>
        <div class="social-container flex md:flex-row flex-wrap justify-between items-center mx-auto relative w-max pt-2">
            {#each socialIcons as icon}
                <a 
                    href="{icon.url}" 
                    aria-label="{icon.label}"
                    title="{icon.label}"
                    target="_blank"
                    class="h-10 m-2">
                    <img 
                        src="{icon.logo}" 
                        alt="{icon.label}"
                        title="{icon.label}"
                        class="h-full">
                </a>
            {/each}
        </div>
    </footer>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style lang="scss">
    @import '../../styles/vars.scss';

    #footer-bar {
        footer {
            min-height: 100px;
            /* background: rgba($theme-color, 0.79); */
            /* padding-top: 8.4%; */
            height: 100%;
            .image-holder {
                height: 100%;
                /* &::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background-size: contain;
                    background-position: bottom;
                    background-repeat: no-repeat;
                    width: 90%;
                    height: 30vh;
                    background-image: var(--imageLeft);
                }
                &::after {
                    background-image: var(--imageRight);
                    right: -450px;
                } */
                @media (min-width: $md) {
                    &:before,
                    &::after {
                        content: "";
                        position: absolute;
                        /* top: 0; */
                        bottom: 0;
                        background-size: contain;
                        background-position: bottom;
                        background-repeat: no-repeat;
                        width: 450px;
                        height: 75vh;
                        z-index: 25;
                    }
                    &::before {
                        background-image: var(--imageLeft);
                        left: -450px;
                    }
                    &::after {
                        background-image: var(--imageRight);
                        right: -450px;
                    }
                }
            }
            .social-container {

            }
        }
    }
</style>