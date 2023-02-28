<script lang="ts">
	import { error } from "@sveltejs/kit";
    console.error(error)

    import '@skeletonlabs/skeleton/styles/elements.css';
    import '@skeletonlabs/skeleton/styles/all.css';
    import '@skeletonlabs/skeleton/styles/elements/alerts.css';
</script>

<main>
    <aside>
        <div class="alert-message">
            <h3>Error</h3>
        </div>
    </aside>
    <h1>Uh Oh! Looks Like An Error Happended!</h1>
    <a href="/">Go Home</a>
    <p>Status : {error}</p>
</main>

<style>

</style>
