import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

		},
		sideBar:{
			
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

		this._state.profilePage = profileReducer(this._state.profilePage,action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
		this._state.sideBar = sidebarReducer(this._state.sideBar,action);
		this._rerenderEntireTree(this._state);	
	}
}







export default store;

window.store = store;