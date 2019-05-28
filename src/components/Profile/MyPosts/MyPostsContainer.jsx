import React from 'react';
import { updateNewPostTextActionCreater, addPostActionCreater } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {
	debugger;
	let state = props.store.getState();
	
	let addPost = () => {
		props.store.dispatch(addPostActionCreater());

	}

	let onPostChange = (text) => {
	
		let action = (updateNewPostTextActionCreater(text));
		props.store.dispatch(action);

	}

	return (<MyPosts updateNewPostText={onPostChange } addPost ={addPost} 
		postData={state.profilePage.postData}
		newPostText={state.profilePage.newPostText}/>)

}

export default MyPostsContainer;

