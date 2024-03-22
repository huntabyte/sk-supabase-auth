import { AuthApiError } from '@supabase/supabase-js';
import { fail, type Actions, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	register: async ({ request, locals }) => {
		const formData = Object.fromEntries(await request.formData());

		const { error: err } = await locals.supabase.auth.signUp({
			email: formData.email as string,
			password: formData.password as string
		});

		console.log(formData, err);
		if (err) {
			if (err instanceof AuthApiError && err.status == 400) {
				return fail(400, {
					error: 'Invalid email or password'
				});
			}

			return fail(500, {
				error: 'Something  went wrong, try again later.'
			});
		}

		redirect(300, '/');
	}
};
