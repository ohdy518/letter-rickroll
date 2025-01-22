<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<script>
    import '../../../app.css';
    let { children } = $props();
</script>

{@render children()}
