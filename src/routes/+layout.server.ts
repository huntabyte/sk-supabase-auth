import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	let session = event.locals.session;

	return { session };
};
