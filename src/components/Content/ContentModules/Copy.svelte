<script>
    export let title;
    export let paragraphs = [];

    // youtube placeholder functionality:
    let placeholder = {
        shown: false
    };

    function videoPlaceholderToggle() {
        placeholder.shown = !placeholder.shown;
    }
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<div id="copy-container" class="bg-white md:p-12 p-4">
    <h2 class="text-center font-bold mb-4">
        {title}
    </h2>
    {#each paragraphs as paragraph}
        <p class="text-center font-bold md:mb-4 mb-2 md:text-base text-sm">
            {@html paragraph}
        </p>
    {/each}
</div>

<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style lang="scss">
    /* @import '../../../styles/vars.scss'; */
</style>