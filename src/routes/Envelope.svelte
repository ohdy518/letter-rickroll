<script>
    /** @type {string} */
    export let letter_from
    /** @type {string} */
    export let to

</script>

<div class="w-fit relative">
    <img src="blank-envelope.png" alt="" width="673" class="static"/>
    <span class="godoM font-letter pos-letter-sender">From {letter_from}</span>
    <span class="godoM font-letter pos-letter-recipient text-blur">To {to}</span>
    <button on:click={()=>{}} class="godoM font-def pos-letter-button underline">Open it!</button>
</div>

