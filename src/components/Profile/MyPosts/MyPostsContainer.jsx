import React from 'react';
import { updateNewPostTextActionCreater, addPostActionCreater } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';



const MyPostsContainer = () => {

	return (
		<StoreContext.Consumer>
			{store=> {
				let state = store.getState();

				let addPost = () => {
					store.dispatch(addPostActionCreater());

				}

				let onPostChange = (text) => {

					let action = (updateNewPostTextActionCreater(text));
					store.dispatch(action);

				}
				return <MyPosts
					updateNewPostText={onPostChange}
					addPost={addPost}
					postData={state.profilePage.postData}
					newPostText={state.profilePage.newPostText} />
			}
			}
		</StoreContext.Consumer>
	)
}

export default MyPostsContainer;

