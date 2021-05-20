<script>
    /* stores can go here: */
    // whether modal should be open or not:
    import { open } from '../../data/stores.js';
    function openClose() {
		open.set(false);
	}
    let modalState;
    const openModal = open.subscribe(value => {
        modalState = value;
    });
    // what the modal content should be:
    import { modalInner } from '../../data/stores.js';
    let modalContent;
    const getModalContent = modalInner.subscribe(value => {
        modalContent = value;
    });

    // console.log('modalState', modalState)

    /* everything else */
    import { onMount } from 'svelte';



    let modal;

    function closeModal() {
        console.log('modal closed')
        openClose();
        window.removeEventListener("keyup", handleKeyUp);
    }

    function handleClickOutside(e) {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }

    function handleKeyUp(e) {
        console.log('keyed up')
        if (e.key === "Escape") return closeModal();
    }
    
    onMount(() => {
        // can't get exit on escape stuff to work properly no idea why 💀
        if (modalState) { 
            // event listeners to be bound when we open the modal:
            window.addEventListener("keyup", handleKeyUp);
            modal.addEventListener("click", handleClickOutside);
            console.log('modal state is', modalState)
        }
        
	});
    
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<div 
    id="modal"
    bind:this="{modal}"
    on:click={handleClickOutside}
    class="fixed bg-black bg-opacity-50 z-50 top-0 right-0 bottom-0 left-0 grid items-center justify-center pointer-events-none opacity-0 transition-opacity {modalState && 'open'}">
    <div 
        id="modalInner"
        class="bor rounded bg-white shadow-2xl transition-all max-w-screen-lg	grid m-12 relative p-2">
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-10 w-10 filter drop-shadow-xl transform hover:scale-105 transition-all fill-curren absolute -top-3 -right-3" 
            viewBox="0 0 20 20"
            role="button"
            on:click={closeModal}
            id="modal-exit"
            fill="currentColor">
                <path 
                    fill-rule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
                    clip-rule="evenodd" />
        </svg>
        {@html modalContent}
    </div>
</div>

<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style lang="scss">
    @import '../../styles/vars.scss';

    #modalInner {
        max-height: calc(100vh - 100px);
        transform: translateY(-100vh);
        #modal-exit {
            fill: rgba($theme-color, 0.9);
        }
    }
    #modal.open {
        opacity: 1;
        pointer-events: all;
        #modalInner {
            transform: translateY(0);
        }
    }

   
</style>