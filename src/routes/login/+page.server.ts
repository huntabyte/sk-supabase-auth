import { AuthApiError } from '@supabase/supabase-js';
import { fail, type Actions, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	login: async ({ request, locals }) => {
		const formData = Object.fromEntries(await request.formData());

		if (!formData.email || !formData.password) {
			return fail(400, { error: 'Email or Password Required to login.' });
		}

		const { error: err } = await locals.supabase.auth.signInWithPassword({
			email: formData.email as string,
			password: formData.password as string
		});

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, { error: 'Invalid Credential' });
			}

			return fail(500, {
				message: 'Server error, please try again.'
			});
		}

		throw redirect(303, '/');
	}
};
