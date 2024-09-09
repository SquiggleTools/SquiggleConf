import { links } from "./links.js";

export interface ScheduleDay {
	activities: ActivityData[];
	title: string;
}

export interface ActivityData {
	description: string[];
	location?: ActivityLocation;
	time?: string;
	title: string;
}

export interface ActivityLocation {
	href: string;
	text: string;
}

export const days: ScheduleDay[] = [
	{
		activities: [
			{
				description: [
					"[Artists for Humanity (AFH)](https://www.afhboston.org) is a Boston not-for-profit that employs local teens after school, giving them invaluable art, coding, and design experience.",
					"We'll come over there to help the teens with their coding projects and run mini-workshops on useful development topics.",
					`This event is free and open to any attendee who can code in at least HTML. Please [sign up by September 30th to volunteer](${links.volunteering}). 💙`,
				],
				location: {
					href: "https://www.afhboston.org",
					text: "Artists for Humanity EpiCenter",
				},
				time: "3:00pm - 6:00pm",
				title: "Artists for Humanity Volunteering Event",
			},
		],
		title: "Wednesday, October 2nd",
	},
	{
		activities: [
			{
				description: [
					"Join organizers, volunteers, and attendees for a free joyful jog around the Boston harbor.",
					"We'll meet at the New England Aquarium and run in a 5k loop at a comfortably light pace.",
				],
				location: {
					href: "https://www.neaq.org/visit",
					text: "New England Aquarium",
				},
				time: "7:00am",
				title: "Morning Fun Run",
			},
			{
				description: [
					"Come over to the venue, collect your badge, and network with fellow attendees.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				time: "8:30am",
				title: "Doors Open",
			},
			{
				description: ["Full-length and lightning talks from our speakers."],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				time: "9:40am",
				title: "Talks",
			},
			{
				description: [
					"Head over to the nearby Faneuil Hall Marketplace for lunch.",
					"We'll have volunteers available to bring groups over to popular food establishments.",
				],
				location: {
					href: "https://faneuilhallmarketplace.com",
					text: "Faneuil Hall Marketplace",
				},
				time: "12:30pm",
				title: "Lunch",
			},
			{
				description: ["Full-length and lightning talks from our speakers."],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				time: "2:00pm",
				title: "Talks",
			},
			{
				description: [
					"What a day! Let's take a breather to have a snack and chat.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				time: "4:30pm",
				title: "Afternoon Snack",
			},
			{
				description: ["Full-length and lightning talks from our speakers."],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				time: "5:00pm",
				title: "Talks",
			},
			{
				description: [
					"Final pieces of information on upcoming events, raffle giveaways, and appreciation notes to all of the lovely people who attended.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				time: "6:15pm",
				title: "Closing Announcements",
			},
			{
				description: [
					"We'll set up a casual space for folks to mingle after the conference. Location and time TBA.",
					"Subscribe to our [newsletter](/#newsletter) to be the first to hear about it.",
				],
				title: "Post-Conference Hangout",
			},
		],
		title: "Thursday, October 3rd",
	},
	{
		activities: [
			{
				description: [
					"Join organizers, volunteers, and attendees for a free joyful jog around the Boston harbor.",
					"We'll meet at the New England Aquarium and run in a 5k loop at a comfortably light pace.",
				],
				location: {
					href: "https://www.neaq.org/visit",
					text: "New England Aquarium",
				},
				time: "7:00am",
				title: "Morning Fun Run",
			},
			{
				description: [
					"Learn actionable day-to-day skills and technological takeaways from some of our partners and sponsors.",
				],
				title: "Morning Workshops",
			},
		],
		title: "Friday, October 4th",
	},
];
