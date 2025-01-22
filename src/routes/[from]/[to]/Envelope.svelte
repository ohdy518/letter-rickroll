<meta name="viewport" content="width=device-width, initial-scale=1.0">

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
            video.play()
            // video.muted = false
        }, 3000)
    }

</script>

<div class="w-fit relative">
    <div id="envelope">
        <img src="/resources/blank-envelope.png" alt="" class="static media-size"/>
        <span class="godoM font-letter pos-envelope-sender">From {letter_from}</span>
        <span class="godoM font-letter pos-envelope-recipient text-blur text-center min-w-48 max-w-48">To {to}</span>
        <button on:click={()=>{openEnvelope()}} class="godoM font-def pos-envelope-button underline">Open it!</button>
    </div>
    <div id="letter-container">
        <div id="letter" class="letter-div" hidden>
            <span id="fetching" class="godoM font-letter letter-fetching-pos text-center">Fetching...</span>
            <video id="the-video" class="media-size" hidden>
                <source src="/resources/video.mp4" type="video/mp4" />
                <track kind="captions" src="">
            </video>
        </div>
    </div>
</div>

