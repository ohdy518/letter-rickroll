<title>Letter from ohdy</title>
<script>
    import { page } from "\$app/state";

    import Header from "./Header.svelte";
    import Envelope from "./Envelope.svelte";

</script>
<div class="w-screen h-screen flex flex-col items-center justify-center">
    <Header name="{page.params.from}"/>
    <div class="w-max h-9"></div>
    <Envelope letter_from="{page.params.from}" to="{page.params.to}"/>
</div>