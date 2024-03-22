<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.postcss';
	import type { LayoutData } from './$types';
	import { goto, invalidate, invalidateAll } from '$app/navigation';

	export let data: LayoutData;
	$: ({ supabase } = data);

	onMount(async () => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
			invalidateAll();
		});
		return () => subscription.unsubscribe();
	});

	const submitLogout = async ({ cancel }: { cancel: CallableFunction }) => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
		await goto('/');
	};
</script>

<slot />
