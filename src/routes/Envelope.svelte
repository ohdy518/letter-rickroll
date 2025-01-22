<script>
    /** @type {string} */
    export let letter_from
    /** @type {string} */
    export let to

    function openEnvelope() {
        let envelopeDiv = document.getElementById("envelope");
        let letterDiv = document.getElementById("letter")
        if (!(envelopeDiv && letterDiv)) {
            return
        }
        envelopeDiv.hidden = true
        letterDiv.hidden = false

        mainObjective()
    }

    function mainObjective() {
        setTimeout(() => {
            let fetchingSpan = document.getElementById("fetching");
            if (!fetchingSpan) {
                return
            }
            fetchingSpan.classList.add("fade-out-text")
        }, 1000)
        setTimeout(() => {
            let letterDiv = document.getElementById("letter")
            if (!letterDiv) {
                return
            }
            letterDiv.classList.remove("letter-div")
            letterDiv.classList.add("letter-standby")
        }, 1500)
        setTimeout(() => {
            let video = document.getElementById("the-video")
            let letterDiv = document.getElementById("letter")
            if (!(video && letterDiv)) {
                return
            }
            // letterDiv.hidden = true
            video.hidden = false
        }, 3000)
    }

</script>

<div class="w-fit relative">
    <div id="envelope">
        <img src="blank-envelope.png" alt="" width="673" class="static"/>
        <span class="godoM font-letter pos-envelope-sender">From {letter_from}</span>
        <span class="godoM font-letter pos-envelope-recipient text-blur">To {to}</span>
        <button on:click={()=>{openEnvelope()}} class="godoM font-def pos-envelope-button underline">Open it!</button>
    </div>
    <div id="letter-container">
        <div id="letter" class="letter-div" hidden>
            <span id="fetching" class="godoM font-letter letter-fetching-pos text-center">Fetching...</span>
            <video id="the-video" width="673" autoplay hidden>
                <source src="./video.mp4" type="video/mp4" />
                <track kind="captions" src="">
            </video>
        </div>
    </div>
</div>

