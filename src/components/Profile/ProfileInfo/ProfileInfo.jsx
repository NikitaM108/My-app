import React from 'react';
import style from './ProfileInfo.module.sass';
import Preloader from '../../common/Preloader';
import Typography from '@material-ui/core/Typography';
import UserCard from './UserCard';
import ContactsCard from './ContactsCard';





const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div className={style.MainContainer}>
			<div className={style.Title}>
				<Typography variant="h3" gutterBottom >
					Profile
      </Typography>
			</div>
			<div className={style.ContentContainer}>
				<UserCard profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
				<ContactsCard />
			</div>
		</div>
	)
};

export default ProfileInfo;


