const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
	_state: {

		profilePage: {
			postData: [
				{ id: 1, message: 'Hello!', likeCount: 9 },
				{ id: 2, message: 'Hello!', likeCount: 20 }
			],
			newPostText: 'ну вот'
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Misha' },
				{ id: 2, name: 'Andrew' },
				{ id: 3, name: 'grisha' }
			],

			messagesData: [
				{ id: 1, message: 'Hello!' },
				{ id: 2, message: 'Hello!' },
				{ id: 3, message: 'Hello!' },
			]

		}
	},
	getState() {

		return this._state;
	},

	_rerenderEntireTree() {
		console.log('state changed');
	},
	addPost() {

		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likeCount: 0
		};
		this._state.profilePage.postData.push(newPost);
		this._state.profilePage.newPostText = '';
		this._rerenderEntireTree(this._state);
	},
	updateNewPostText(newText) {

		this._state.profilePage.newPostText = newText;
		this._rerenderEntireTree(this._state);
	},
	call(observer) {
		this._rerenderEntireTree = observer;
	},
	dispatch(action) {
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likeCount: 0
			};
			this._state.profilePage.postData.push(newPost);
			this._state.profilePage.newPostText = '';
			this._rerenderEntireTree(this._state);

		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {

			this._state.profilePage.newPostText = action.newText;
			this._rerenderEntireTree(this._state);


		}
	}
}

export const addPostActionCreater = () => ({
		type:'ADD-POST'
	})


export const updateNewPostTextActionCreater = (text) =>  ({
		
		type:'UPDATE-NEW-POST-TEXT', newText: text
		
	})


export default store;

window.store = store;