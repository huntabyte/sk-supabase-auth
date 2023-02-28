<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';

	const signInWithGoogle = async () => {
		const { data, error } = await supabaseClient.auth.signInWithOAuth({
			provider: 'google'
		});
		if (error) {
			console.log(error);
		}
	};

	const signInWithDiscord = async () => {
		const { data, error } = await supabaseClient.auth.signInWithOAuth({
			provider: 'discord'
		});
		if (error) {
			console.log(error);
		}
	};

	const signInWithGithub = async () => {
		const { data, error } = await supabaseClient.auth.signInWithOAuth({
			provider: 'github'
		});
		if (error) {
			console.log(error);
		}
	};

	const submitSocial: SubmitFunction = async ({ action, cancel }) => {
		switch (action.searchParams.get('provider')) {
			case 'google':
				await signInWithGoogle();
				break;
			case 'discord':
				await signInWithDiscord();
				break;
			case 'github':
				await signInWithGithub();
				break;
			default:
				break;
		}
		cancel();
	};
</script>

<main>
	<h1>Login</h1>
	<form action="?/login" method="POST" class="auth-form">
		<label for=""> Email </label>
		<input type="text" name="email" />
		<label for=""> Password </label>
		<input type="password" name="password" />
		<button type="submit" class="btn btn-primary">Login</button>
	</form>
	<form method="POST" use:enhance={submitSocial} class="socials">
		<button formaction="?/login&provider=google" class="btn btn-ghost">Google</button>
		<button formaction="?/login&provider=discord" class="btn btn-ghost">Discord</button>
		<button formaction="?/login&provider=github" class="btn btn-ghost">GitHub</button>
	</form>
	<p class="padding-10">Not a user? <a href="?/register" class="">Register</a></p>
</main>
