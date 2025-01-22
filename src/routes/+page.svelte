<script>
    import Header from "./Header.svelte";
    import Envelope from "./Envelope.svelte";
</script>
<div class="w-screen h-screen flex flex-col items-center justify-center debug">
    <Header name="ohdy"/>
    <div class="w-max h-9"></div>
    <Envelope letter_from="ohdy" to="James"/>
</div>