import React from 'react';
import a from './ProfileInfo.module.sass';
import Preloader from '../../common/Preloader';



const ProfileInfo = (props) => {
	if(!props.profile) {
		return <Preloader/>
	}
	return (
		<div>

			<div className="wallpaper">
				<img className={a.space}></img>
			</div>

			<div className={a.descriptionBlock}>
				<img src = {props.profile.photos.large}/>
			ava + description
	</div>

		</div>
	)
};

export default ProfileInfo;


