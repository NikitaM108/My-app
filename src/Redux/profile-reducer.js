import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
	postData: [
		{ id: 1, message: 'Hello!', likeCount: 9 },
		{ id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', likeCount: 20 },
	],
	newPostText: 'I am writing some posts !',
	profile: null,
	status: ""
};

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: state.newPostText,
				likeCount: 0
			};
			return {
				...state,
				postData: [...state.postData, newPost],
				newPostText: ''

			};


		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText
			};
		}

		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile

			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status

			};
		}
		default:
			return state;

	}
}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreater = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })




export const getUserProfile = (userId) => (dispatch) => {

	usersAPI.getProfile(userId)
		.then(response => {
			dispatch(setUserProfile(response.data));
		});

}

export const getStatus = (userId) => (dispatch) => {

	profileAPI.getStatus(userId)
		.then(response => {
			dispatch(setStatus(response.data));
		});

}

export const updateStatus = (status) => (dispatch) => {

	profileAPI.updateStatus(status)
		.then(response => {
			 if (response.data.resultCode === 0)	{
				dispatch(setStatus(status));
			 }
		});

}

export default profileReducer;