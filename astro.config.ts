import vercel from "@astrojs/vercel/serverless";
import { konamiEmojiBlast } from "@konami-emoji-blast/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
	integrations: [konamiEmojiBlast()],
	output: "server",
	redirects: {
		"/talks": "/sessions",
	},
	site: "https://2024.squiggleconf.com",
});
