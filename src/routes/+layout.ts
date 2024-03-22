import { createSupabaseBrowserClient } from '$lib/supabase';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data, depends }) => {
	depends('supabase:auth');

	const supabase = createSupabaseBrowserClient({ data });
	const {
		data: { session }
	} = await supabase.auth.getSession();

	return { supabase, session };
};
