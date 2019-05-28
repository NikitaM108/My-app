const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
	postData: [
		{ id: 1, message: 'Hello!', likeCount: 9 },
		{ id: 2, message: 'Hello!', likeCount: 20 }
	],
	newPostText: 'ну вот'
};

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: state.newPostText,
				likeCount: 0
			};
			state.postData.push(newPost);
			state.newPostText = '';
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state;

	}
}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreater = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;