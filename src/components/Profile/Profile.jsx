import React from 'react';
import a from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />

			<MyPosts postData={props.profilePage.postData} 
			newPostText={props.profilePage.newPostText}
			dispatch={props.dispatch}/>
		</div>
	)
};

export default Profile;


