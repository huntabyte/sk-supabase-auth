<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { createSupabaseBrowserClient } from '$lib/supabase';
	import type { PageData } from './$types';

	export let data: PageData;

	const submitLogout: SubmitFunction = async ({ cancel, data }) => {
		const { error } = await createSupabaseBrowserClient({ data }).auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};
</script>

<main>
	<h1>SvelteKit & Supabase Auth</h1>
	{#if data.session}
		<p>Welcome, {data.session.user.email}</p>
		<form method="POST" action="/logout" use:enhance={submitLogout}>
			<button style="margin-top: .5rem;" type="submit" class="btn btn-primary">Logout here</button>
		</form>
	{:else}
		<p>Let's learn how to register and login users!</p>
		<div class="auth-buttons">
			<a href="/login" class="btn btn-primary">Login</a>
			<a href="/register" class="btn btn-secondary">Register</a>
		</div>
	{/if}
</main>
