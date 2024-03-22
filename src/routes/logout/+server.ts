import { error, redirect, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ locals }) => {
	const { error: err } = await locals.supabase.auth.signOut();

	if (err) {
		error(500, 'Something went wrong logging you out.');
	}

	throw redirect(303, '/');
};
