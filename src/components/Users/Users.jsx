import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/images.png';
import { NavLink } from "react-router-dom";
import * as axios from 'axios';

let Users = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return <div>
		<div>
			{pages.map(p => {
				return <span className={props.currentPage === p && styles.selectedPage}
					onClick={(e) => { props.onPageChanged(p) }}>{p}</span>

			})}
		</div>
		{
			props.users.map(users => <div key={users.id}>
				<span>
					<div>
						<NavLink to={'/profile/' + users.id}>
							<img src={users.photos.small != null ? users.photos : userPhoto} alt="photo"
								className={styles.ъуъ} />
						</NavLink>
					</div>
					<div>
						{users.followed
							? <button onClick={() => {
								axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {
									withCredentials: true,
									headers: {
										"API-KEY" : "8b6d6d36-525c-4671-8e20-3454fab7f0a1"
									}

								})
									.then(response => {
										if (response.data.resultCode === 0) {
										props.unfollow(users.id)
										}
									});
							
							}}>Unfollow</button>
							: <button onClick={() => {
								axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {}, {
									withCredentials: true,
									headers: {
										"API-KEY" : "8b6d6d36-525c-4671-8e20-3454fab7f0a1"
									}

								})
									.then(response => {
										if (response.data.resultCode === 0) {
											props.follow(users.id)
										}
									});
							}}>Follow</button>}
					</div>
				</span>
				<span>
					<span>
						<div>{users.name}</div>
						<div>{users.status}</div>
					</span>
					<span>
						<div>{"users.location.country"}</div>
						<div>{"users.location.city"}</div>
					</span>
				</span>
			</div>)
		}
	</div>
}
export default Users;
