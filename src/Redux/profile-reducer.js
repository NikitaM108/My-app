import { usersAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
	postData: [
		{ id: 1, message: 'Hello!', likeCount: 9 },
		{ id: 2, message: 'Hello!', likeCount: 20 }
	],
	newPostText: 'ну вот',
	profile: null
};

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:{
			let newPost = {
				id: 5,
				message: state.newPostText,
				likeCount: 0
			};
			return  {
				...state,
				postData:[...state.postData, newPost],
				newPostText: ''

			};
			
		
		}
		case UPDATE_NEW_POST_TEXT:{
			return {
				...state,
				newPostText:action.newText
			};
		}
		
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
					
			};
			
		
		}
		default:
			return state;

	}
}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreater = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile =(profile) =>({type:SET_USER_PROFILE, profile })


export const getUserProfile =(userId) =>(dispatch) =>{
	
	usersAPI.getProfile(userId)
	.then(response => {
		dispatch(setUserProfile(response.data));
	});

}

export default profileReducer;