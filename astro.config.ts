import { defineConfig } from "astro/config";
import { konamiEmojiBlast } from "@konami-emoji-blast/astro";

export default defineConfig({
	integrations: [konamiEmojiBlast()],
	site: "https://squiggleconf.com",
});
