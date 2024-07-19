import bluesky from "./assets/bluesky.svg";
import discord from "./assets/discord.svg";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import mastodon from "./assets/mastodon.svg";
import twitter from "./assets/twitter.svg";

export const socials = [
	{
		alt: "Bluesky",
		href: "https://bsky.app/profile/squiggleconf.com",
		src: bluesky,
	},
	{
		alt: "LinkedIn",
		href: "https://www.linkedin.com/company/squiggleconf",
		src: linkedin,
	},
	{
		alt: "Mastodon",
		href: "https://fosstodon.org/@SquiggleConf",
		src: mastodon,
	},
	{
		alt: "Twitter",
		href: "https://twitter.com/SquiggleConf",
		src: twitter,
	},
];

export const locations = [
	...socials,
	{
		alt: "GitHub",
		href: "https://www.github.com/SquiggleTools/SquiggleConf",
		src: github,
	},
	{
		alt: "Discord",
		href: "https://discord.squiggleconf.com",
		src: discord,
	},
].sort((a, b) => a.alt.localeCompare(b.alt));
