<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Letter from {d_from}</title>
<script>
    import { page } from "\$app/state";

    import Header from "./Header.svelte";
    import Envelope from "./Envelope.svelte";

    function valueToChar(value) {
        if (value >= 1 && value <= 26) {
            return String.fromCharCode(value + 'A'.charCodeAt(0) - 1);
        } else if (value >= 27 && value <= 52) {
            return String.fromCharCode(value + 'a'.charCodeAt(0) - 27);
        } else {
            throw new Error("Unsupported value!");
        }
    }

    function decodeInteger(value) {
        const base = 52;
        const result = [];
        while (value > 0) {
            result.unshift(value % base);
            value = Math.floor(value / base);
        }
        return result.map(valueToChar).join('');
    }

    const d_from = decodeInteger(page.params.from)
    const d_to = decodeInteger(page.params.to)

</script>
<div class="w-screen h-screen flex flex-col items-center justify-center">
    <Header name="{d_from}"/>
    <div class="w-max h-9"></div>
    <Envelope letter_from="{d_from}" to="{d_to}"/>
</div>