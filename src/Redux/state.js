const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
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
				{ id: 3, message: 'Hello!' }
			],
			newMessageBody: ""

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
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likeCount: 0
			};
			this._state.profilePage.postData.push(newPost);
			this._state.profilePage.newPostText = '';
			this._rerenderEntireTree(this._state);

		} else if (action.type === UPDATE_NEW_POST_TEXT) {

			this._state.profilePage.newPostText = action.newText;
			this._rerenderEntireTree(this._state);

		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.body;
			this._rerenderEntireTree(this._state);
		} else if (action.type === SEND_MESSAGE) {
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.newMessageBody = '';
			this._state.dialogsPage.messagesData.push({ id: 4, message: body });
			this._rerenderEntireTree(this._state);
		}
	}
}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreater = (text) => ({
	type: UPDATE_NEW_POST_TEXT, newText: text
})

export const sendMessageCreater = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreater = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})



export default store;

window.store = store;