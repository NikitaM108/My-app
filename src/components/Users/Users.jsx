import React from 'react';
import styles from './Users.module.sass';
import userPhoto from '../../assets/images/images.png';
import { NavLink } from "react-router-dom";
import UserPagination from "./UserPagination";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		maxWidth: 1000,
		backgroundColor: theme.palette.background.paper,
	},
	pos: {
		padding: 10,
	},
	nickPos: {
		padding: 10,
	},
	button: {
		margin: theme.spacing(1),
	},

}));


let Users = (props) => {
	const classes = useStyles();


	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return <div>
		<div className={styles.title}>
			<Typography variant="h5" gutterBottom >
				The list of users
      </Typography>
		</div>
		<div className={styles.pagiNav}>
			<UserPagination onPageChanged={props.onPageChanged}
				totalUsersCount={props.totalUsersCount}
				pageSize={props.pageSize}
				currentPage={props.currentPage} />
		</div>
		<Divider variant="fullwith" />


		{/* <div>
			{pages.map(pageNumber => {
				return <span className={props.currentPage === pageNumber && styles.selectedPage}
					 onClick={() => { props.onPageChanged(pageNumber) }}>{pageNumber}</span>
			})}
		</div> */}

		{
			props.users.map(users => <div key={users.id}>
				<div className={classes.root}>
					<List component="nav">
						<NavLink to={'/profile/' + users.id} className={styles.nickNames}>
							<ListItem button>
								<img src={users.photos.small != null ? users.photos.small : userPhoto} alt="photo"
									className={styles.avatar} />
								<Typography variant="body1" gutterBottom>
									<ListItemText primary={users.name} secondary={users.status} className={classes.nickPos} />
								</Typography>
							</ListItem>

						</NavLink>
						<ListItemSecondaryAction>
							<div>
							{users.followed 
							?    <Button disabled={props.followingInProgress.some(id => id === users.id)}
							 variant="contained" color="primary" edge="end" className={classes.button}
							 onClick={() => {
										props.unfollow(users.id)
									}}>
								Follow</Button>
							:<Button disabled={props.followingInProgress.some(id => id === users.id)}
								variant="contained" color="secondary" edge="end" className={classes.button}
								onClick={() => {
										 props.follow(users.id)
									 }}>
								UnFollow</Button>}
							
							</div>
						</ListItemSecondaryAction>

					</List>
					<Divider variant="fullwith" />

				</div>

				{/* <div>
						{users.followed
							? <button disabled={props.followingInProgress.some(id => id === users.id)} 
								onClick={() => {
								props.unfollow( users.id)}}>
									Unfollow</button>
							: <button disabled={props.followingInProgress.some(id => id === users.id)} onClick={() => {
								props.follow(users.id)}}>
								Follow</button>}
					</div>  */}



			</div>)
		}
	</div>
}
export default Users;
