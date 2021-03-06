const preloadedState = {
	questions: [
		{
			id: 0,
			optionOne: 'eat a scorpion',
			optionTwo: 'confess to your crush',
			submitter: 'Krushil Naik',
			choseOne: 1,
			choseTwo: 0
		},
		{
			id: 1,
			optionOne: 'ask a question',
			optionTwo: 'answer a question',
			submitter: 'Krushil Naik',
			choseOne: 1,
			choseTwo: 0
		},
		{
			id: 2,
			optionOne: 'use semicolons',
			optionTwo: 'delete semicolons',
			submitter: 'Tyler McGinnis',
			choseOne: 2,
			choseTwo: 0
		},
		{
			id: 3,
			optionOne: 'ask "where\'s waldo"',
			optionTwo: 'ask "how\'s waldo"',
			submitter: 'Waldo',
			choseOne: 1,
			choseTwo: 1
		}
	],
	userDB: [
		{
			name: 'Krushil Naik',
			avatar:
				'https://cdn2.iconfinder.com/data/icons/super-hero/154/ironman-head-comics-avatar-iron-man-512.png',
			questionsAnswered: [
				{
					questionID: 2,
					answer: 1
				},
				{
					questionID: 3,
					answer: 2
				},
				{
					questionID: 1,
					answer: 1
				}
			],
			questionsAsked: [0, 1]
		},
		{
			name: 'Tyler McGinnis',
			avatar: 'assets/images/react-redux.jpeg',
			questionsAnswered: [
				{
					questionID: 0,
					answer: 1
				},
				{
					questionID: 3,
					answer: 1
				}
			],
			questionsAsked: [2]
		},
		{
			name: 'Waldo',
			avatar:
				'https://i.pinimg.com/236x/ea/d6/be/ead6bef635795a9dc0a511e815c778c3--wheres-wally-kid-books.jpg',
			questionsAnswered: [
				{
					questionID: 2,
					answer: 1
				}
			],
			questionsAsked: [3]
		}
	]
};

export default preloadedState;
