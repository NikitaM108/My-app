import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers } from '../../Redux/users-reducer';
import Preloader from '../common/Preloader';
// import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getPageSize, getTotalUsersCount, getUsersList, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../Redux/users-selectors';




class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);

	}
	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
				followingInProgress={this.props.followingInProgress}
			/>
		</>

	}
}

// let mapStateToProps = (state) => {
// 	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching,
// 		followingInProgress: state.usersPage.followingInProgress
// 	}
// }

let mapStateToProps = (state) => {
	return {
		users: getUsersList(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}


export default compose(
	connect(mapStateToProps, {
		follow, unfollow, setCurrentPage,
		toggleIsFollowingProgress, getUsers
	}),
	// withAuthRedirect
)(UsersContainer);

