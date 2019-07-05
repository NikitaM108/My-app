import React from 'react';
import a from './ProfileInfo.module.sass';
import Preloader from '../../common/Preloader';
import Divider from '@material-ui/core/Divider';
import UserCard from './UserCard';
import ContactsCard from './ContactsCard';





const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div className={a.page}>
			<h3 className={a.title}>Profile</h3>
			<Divider variant="fullwith"/>
			<UserCard profile={props.profile} />
			<Divider variant="fullwith" />
			<div className={a.descriptionBlock}>
				<ContactsCard />
			</div>

		</div>
	)
};

export default ProfileInfo;


