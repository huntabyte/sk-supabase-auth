import { getServerSession } from "@supabase/auth-helpers-sveltekit"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async (event) => {
	return {
		session: await getServerSession(event),
	}
}
