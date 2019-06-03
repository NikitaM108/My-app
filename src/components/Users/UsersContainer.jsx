import React from 'react';
import { connect } from "react-redux";
import Users from './Users';
import { FollowAC, UnfollowAC, SetUsersAC } from '../../Redux/users-reducer';

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(FollowAC(userId));
		},
		unfollow: (userId) => {
			dispatch(UnfollowAC(userId));
		},
		setUsers: (users) => {
			dispatch(SetUsersAC(users));
		}
	}
}




const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;