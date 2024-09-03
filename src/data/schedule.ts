export interface ScheduleDay {
	activities: ActivityData[];
	title: string;
}

export interface ActivityData {
	description: string[];
	location?: string;
	time?: string;
	title: string;
}

export const days: ScheduleDay[] = [
	{
		activities: [
			{
				description: [
					"We'll have a free volunteering event in partnership with a local nonprofit as a mixer. Join us to do good for the Boston community with fellow conference-goers.",
					"Subscribe to our [newsletter](/#newsletter) to be the first to hear about it.",
				],
				title: "Volunteering Event",
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
				location: "New England Aquarium",
				time: "7:00am",
				title: "Morning Fun Run",
			},
			{
				description: [
					"Come over to the venue, collect your badge, and network with fellow attendees.",
				],
				location: "Simons Theater",
				time: "8:30am",
				title: "Doors Open",
			},
			{
				description: ["Full-length and lightning talks from our speakers."],
				location: "Simons Theater",
				time: "9:40am",
				title: "Talks",
			},
			{
				description: [
					"Head over to the nearby Faneuil Hall Marketplace for lunch.",
					"We'll have volunteers available to bring groups over to popular food establishments.",
				],
				location: "Faneuil Hall Marketplace",
				time: "12:30pm",
				title: "Lunch",
			},
			{
				description: ["Full-length and lightning talks from our speakers."],
				location: "Simons Theater",
				time: "2:00pm",
				title: "Talks",
			},
			{
				description: [
					"Head over to the nearby Faneuil Hall Marketplace for lunch.",
					"We'll have volunteers available to bring groups over to popular food establishments.",
				],
				location: "Simons Theater",
				time: "4:30pm",
				title: "Afternoon Snack",
			},
			{
				description: ["Full-length and lightning talks from our speakers."],
				location: "Simons Theater",
				time: "5:00pm",
				title: "Talks",
			},
			{
				description: [
					"Final pieces of information on upcoming events, raffle giveaways, and appreciation notes to all of the lovely people who attended.",
				],
				location: "Simons Theater",
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
				location: "New England Aquarium",
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
