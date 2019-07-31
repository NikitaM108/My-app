import {  addPostActionCreater, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
	return {
		postData: state.profilePage.postData,
		newPostText: state.profilePage.newPostText

	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) =>{
			let action = updateNewPostTextActionCreator(text);
			dispatch (action)
		},
		addPost: () => {
			dispatch(addPostActionCreater());
		}
		
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;

