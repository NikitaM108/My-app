import React from 'react';
import a from './ProfileInfo.module.sass';
import Preloader from '../../common/Preloader';
import Typography from '@material-ui/core/Typography';
import UserCard from './UserCard';
import ContactsCard from './ContactsCard';





const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div >
			<div className={a.title}>
				<Typography variant="h5" gutterBottom >
				Profile
      </Typography>
			</div>
			
			<UserCard profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
			<div className={a.descriptionBlock}>
				<ContactsCard />
			</div>

		</div>
	)
};

export default ProfileInfo;


