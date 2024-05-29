import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://2024.squiggleconf.com",
	output: "server",
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
});
