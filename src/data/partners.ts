import afhBlack from "../assets/partners/afh-black.svg";
import afhWhite from "../assets/partners/afh-white.svg";
import conTejasCode from "../assets/partners/contejas-code.png";
import hackDiversityBlue from "../assets/partners/hack-diversity-blue.svg";
import hackDiversityWhite from "../assets/partners/hack-diversity-white.svg";
import jsParty from "../assets/partners/js-party.png";
import thisWeekInReactDarkMode from "../assets/partners/this-week-in-react-dark-mode.png";
import thisWeekInReactLightMode from "../assets/partners/this-week-in-react-light-mode.png";

export const partnersBySlug = {
	afh: {
		href: "https://www.afhboston.org/?utm_source=squiggleconf",
		logos: {
			dark: afhWhite,
			light: afhBlack,
		},
		title: "Artists for Humanity",
	},
	contejas: {
		href: "https://tej.as/#podcast",
		logos: {
			dark: conTejasCode,
			light: conTejasCode,
		},
		title: "ConTejas Code Podcast",
	},
	hackDiversity: {
		href: "https://www.hackdiversity.com/?utm_source=squiggleconf",
		logos: {
			dark: hackDiversityWhite,
			light: hackDiversityBlue,
		},
		title: "Hack.Diversity",
	},
	jsparty: {
		href: "https://changelog.com/jsparty?utm_source=squiggleconf",
		logos: {
			dark: jsParty,
			light: jsParty,
		},
		title: "JS Party",
	},
	twir: {
		href: "https://thisweekinreact.com?utm_source=squiggleconf",
		logos: {
			dark: thisWeekInReactDarkMode,
			light: thisWeekInReactLightMode,
		},
		title: "This Week In React",
	},
};
