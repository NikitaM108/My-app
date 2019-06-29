import React from 'react';
import a from './ProfileInfo.module.sass';
import Preloader from '../../common/Preloader';
import icon from '../../../assets/images/icon.png'
import userPhoto from '../../../assets/images/images.png'
import ProfileStatus from './ProfileStatus';




const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className={a.page}>
			<h2 className={a.title}>Profile</h2>
			<div className={a.border}> </div>
			<div className={a.descriptionBlock}>
				<img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} className={a.avatar} />
				<h3 className={a.userTitle}>{props.profile.fullName}</h3>
				<div className={a.subTitle}>
					{props.profile.aboutMe}
				</div>
				<div className={a.styledElement}>
					<img src={icon} className={a.iconHuman}></img>
					<div className={a.borderLeft}></div>
					<div className={a.borderRight}></div>
				</div>
				<div className={a.fullName}>
					 
				</div>
				<p className={a.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<ProfileStatus status ={'Change status here'}  />
				<div className={a.line}></div>
				<div className={a.contacs}>
				<div className={a.styledElement}>
					<img src={icon} className={a.iconHuman}></img>
					<div className={a.borderLeft}></div>
					<div className={a.borderRight}></div>
				</div>
					<h3 className={a.contacsTitle}> Contacs</h3>
					<ul className={a.list}>
						<li>Facebook: <a href="#" className={a.links}>www.facebook.com</a> </li>
						<li>Instagram: <a href="#" className={a.links}>www.instagram.com</a> </li>
						<li>GitHub: <a href="#" className={a.links}>www.github.com</a></li>
					</ul>
				</div>
				
			</div>

		</div>
	)
};

export default ProfileInfo;


