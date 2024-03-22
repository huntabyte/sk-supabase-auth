import type { Handle } from '@sveltejs/kit';
import { createSupabaseServerClient } from '$lib/supabase';
import type { Session } from '@supabase/supabase-js';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.supabase = createSupabaseServerClient(event);

	const getSession = async (): Promise<Session | null> => {
		const { data: getUserData, error: err } = await event.locals.supabase.auth.getUser();
		let {
			data: { session }
		} = await event.locals.supabase.auth.getSession();

		if (getUserData.user == null || err) {
			session = null;
		}
		return session;
	};

	event.locals.session = await getSession();

	const response = await resolve(event, {
		filterSerializedResponseHeaders: (name) => name == 'content-page'
	});
	return response;
};
