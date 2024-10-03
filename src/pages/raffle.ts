import type { APIRoute } from "astro";

export const GET: APIRoute = ({ redirect }) => {
	return redirect("https://forms.gle/R9STYeXJqGHjh3H79", 307);
};
