import React from 'react';
import a from './ProfileInfo.module.sass';
import Preloader from '../../common/Preloader';
import icon from '../../../assets/images/icon.png'
import userPhoto from '../../../assets/images/images.png'



const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			<div className={a.descriptionBlock}>
				<img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} className={a.avatar} />
				<h3 className={a.userTitle}>User</h3>
				<div className={a.subTitle}>
					{props.profile.aboutMe}
				</div>
				<div className={a.styledElement}>
					<img src={icon} className={a.iconHuman}></img>
					<div className={a.borderLeft}></div>
					<div className={a.borderRight}></div>
				</div>
				{/* <div className={a.fullName}>
					<p>Fullname:</p> {props.profile.fullName}
				</div> */}
				<p className={a.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>

		</div>
	)
};

export default ProfileInfo;


