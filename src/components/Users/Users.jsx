import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/images.png';

let Users = (props) => {

	let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
		let pages = [];
		for (let i=1; i <=pagesCount; i++) {
			pages.push(i);
		}
	return <div>
		<div>
			{pages.map(p => {
				return <span className={ props.currentPage === p && styles.selectedPage}
					onClick={(e) => {props.onPageChanged(p) }}>{p}</span>

			})}
		</div>
		{
			props.users.map(users => <div key={users.id}>
				<span>
					<div>
						<img src={users.photos.small != null ? users.photos : userPhoto} alt="photo"
							className={styles.ъуъ} />
					</div>
					<div>
						{users.followed
							? <button onClick={() => { props.unfollow(users.id) }}>Unfollow</button>
							: <button onClick={() => { props.follow(users.id) }}>Follow</button>}
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
