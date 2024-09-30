import _ from "lodash";

import bloombergBlack from "../assets/sponsors/bloomberg-black.svg";
import bloombergWhite from "../assets/sponsors/bloomberg-white.svg";
import datastaxBlack from "../assets/sponsors/datastax-black.svg";
import datastaxWhite from "../assets/sponsors/datastax-white.svg";
import igaliaBlack from "../assets/sponsors/igalia-black.svg";
import igaliaWhite from "../assets/sponsors/igalia-white.svg";
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
		placement: "first",
		title: "Bloomberg",
	},
	datastax: {
		href: "https://www.datastax.com?utm_source=squiggleconf",
		logos: {
			dark: datastaxWhite,
			light: datastaxBlack,
		},
		placement: "first",
		title: "Datastax",
	},
	igalia: {
		href: "https://igalia.com?utm_source=squiggleconf",
		logos: {
			dark: igaliaWhite,
			light: igaliaBlack,
		},
		placement: "second",
		title: "Igalia",
	},
	inngest: {
		href: "https://inngest.com?utm_source=squiggleconf",
		logos: {
			dark: inngest,
			light: inngestBlack,
		},
		placement: "first",
		title: "Inngest",
	},
	nx: {
		href: "https://nx.dev?utm_source=squiggleconf",
		logos: {
			dark: nxWhite,
			light: nxDarkBlue,
		},
		placement: "second",
		title: "OpenJS Foundation",
	},
	"openjs-foundation": {
		href: "https://openjsf.org?utm_source=squiggleconf",
		logos: {
			dark: openjsFoundationLight,
			light: openjsFoundationColor,
		},
		placement: "first",
		title: "OpenJS Foundation",
	},
	prisma: {
		href: "https://www.prisma.io/?utm_source=squiggleconf",
		logos: {
			dark: prismaWhite,
			light: prismaBlack,
		},
		placement: "first",
		title: "Prisma",
	},
};

export const sponsorsByPlacement = _.groupBy(
	Object.entries(sponsorsBySlug).map(([slug, sponsor]) => ({
		slug,
		...sponsor,
	})),
	(sponsor) => sponsor.placement,
);
