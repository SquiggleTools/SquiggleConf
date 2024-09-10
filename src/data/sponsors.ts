import bloombergBlack from "../assets/sponsors/bloomberg-black.svg";
import bloombergWhite from "../assets/sponsors/bloomberg-white.svg";
import inngest from "../assets/sponsors/inngest.svg";
import inngestBlack from "../assets/sponsors/inngest-black.svg";
import nxDarkBlue from "../assets/sponsors/nx-dark-blue.svg";
import nxWhite from "../assets/sponsors/nx-white.svg";
import openjsFoundationColor from "../assets/sponsors/openjs-foundation-color.svg";
import openjsFoundationLight from "../assets/sponsors/openjs-foundation-light.svg";
import prismaBlack from "../assets/sponsors/prisma-black.svg";
import prismaWhite from "../assets/sponsors/prisma-white.svg";

export const sponsorsBySlug = {
	bloomberg: {
		href: "https://www.bloomberg.com/company/values/tech-at-bloomberg/javascript?utm_source=squiggleconf",
		logos: {
			dark: bloombergWhite,
			light: bloombergBlack,
		},
		title: "Bloomberg",
	},
	inngest: {
		href: "https://inngest.com?utm_source=squiggleconf",
		logos: {
			dark: inngest,
			light: inngestBlack,
		},
		title: "Inngest",
	},
	nx: {
		href: "https://nx.dev?utm_source=squiggleconf",
		logos: {
			dark: nxWhite,
			light: nxDarkBlue,
		},
		title: "OpenJS Foundation",
	},
	"openjs-foundation": {
		href: "https://openjsf.org?utm_source=squiggleconf",
		logos: {
			dark: openjsFoundationLight,
			light: openjsFoundationColor,
		},
		title: "OpenJS Foundation",
	},
	prisma: {
		href: "https://www.prisma.io/?utm_source=squiggleconf",
		logos: {
			dark: prismaWhite,
			light: prismaBlack,
		},
		title: "Prisma",
	},
};
