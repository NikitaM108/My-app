import React from 'react';
import { connect } from "react-redux";
import * as axios from 'axios';
import Users from './Users';
import { FollowAC, UnfollowAC, SetUsersAC, SetCurrentPageAC, SetTotalUsersCountAC } from '../../Redux/users-reducer';

class UsersContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
			});

	}
	render() {
		return <Users totalUsersCount={this.props.totalUsersCount}
									pageSize ={this.props.pageSize}
									currentPage = {this.props.currentPage}
									onPageChanged ={this.onPageChanged}
									users={this.props.users}
									follow={this.props.follow}
									unfollow={this.props.unfollow}/>
									
	}
}

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




export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer );
