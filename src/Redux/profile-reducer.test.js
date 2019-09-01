import profileReducer, { addPostActionCreater } from './profile-reducer'


it('new post should be add', () => {
	let action = addPostActionCreater('dgghghhjk');
	let state = {
		postData: [
			{ id: 1, message: 'Hello!', likeCount: 9 },
			{ id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', likeCount: 20 },
		],
		newPostText: "",
		
	};
	let newState = profileReducer(state , action);

	expect(newState.postData.length).toBe (3);
});


