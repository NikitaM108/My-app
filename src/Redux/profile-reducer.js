import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_NEW_POST_TEXT= 'UPDATE_NEW_POST_TEXT'

let initialState = {
	postData: [
		{ id: 1, message: 'Hello!', likeCount: 9 },
		{ id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', likeCount: 20 },
	],
	newPostText: "",
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
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile

			};
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText
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
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const updateNewPostTextActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT, newText: text})


export const getUserProfile = (userId) => async  (dispatch) => {

	let response = await usersAPI.getProfile(userId)
		
			dispatch(setUserProfile(response.data));
		

}

export const getStatus = (userId) => async (dispatch) => {

	let response = await profileAPI.getStatus(userId)
			dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {

	let response = await profileAPI.updateStatus(status)
		
			 if (response.data.resultCode === 0)	{
				dispatch(setStatus(status));
			 }

}

export default profileReducer;