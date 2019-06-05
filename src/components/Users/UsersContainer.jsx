import React from 'react';
import { connect } from "react-redux";
import Users from './Users';
import { FollowAC, UnfollowAC, SetUsersAC, SetCurrentPageAC, SetTotalUsersCountAC } from '../../Redux/users-reducer';

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage:state.usersPage.currentPage
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
		},
		setCurrentPage:(pageNumber)=> {
			dispatch(SetCurrentPageAC(pageNumber));
		},
		setTotalUsersCount:(totalCount)=> {
			dispatch(SetTotalUsersCountAC(totalCount));
		}
	}
}




const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;