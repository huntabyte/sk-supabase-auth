import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import {
	combineChunks,
	createBrowserClient,
	createServerClient,
	isBrowser,
	parse
} from '@supabase/ssr';
import type { Cookies } from '@sveltejs/kit';

export const createSupabaseServerClient = ({ cookies }: { cookies: Cookies }) => {
	return createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
		cookies: {
			get: (key) => cookies.get(key),
			set: (key, value, option) => {
				cookies.set(key, value, { ...option, path: '/' });
			},
			remove: (key, option) => {
				cookies.delete(key, { ...option, path: '/' });
			}
		}
	});
};

export const createSupabaseBrowserClient = ({ data }: { data: Record<string, any> | null }) => {
	return createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
		global: {
			fetch
		},
		cookies: {
			get(key) {
				if (!isBrowser()) {
					return JSON.stringify(data?.session);
				}
				const cookie = combineChunks(key, (name) => {
					const cookies = parse(document.cookie);
					return cookies[name];
				});
				return cookie;
			}
		}
	});
};
