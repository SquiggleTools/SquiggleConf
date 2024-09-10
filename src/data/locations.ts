import youtube from "../assets/logos/YouTube.svg";
import bluesky from "../assets/logos/bluesky.svg";
import discord from "../assets/logos/discord.svg";
import github from "../assets/logos/github.svg";
import linkedin from "../assets/logos/linkedin.svg";
import mastodon from "../assets/logos/mastodon.svg";
import twitter from "../assets/logos/twitter.svg";

export const locations = [
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
	{
		alt: "YouTube",
		href: "https://www.youtube.com/@SquiggleConf",
		src: youtube,
	},
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
