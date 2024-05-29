// vercel why are you not ok at this
// @ts-ignore
import vercel from "@astrojs/vercel/serverless";

import { defineConfig } from "astro/config";

export default defineConfig({
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
	site: "https://squiggleconf.com",
	output: "server",
});
