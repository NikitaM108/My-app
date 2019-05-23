import React from 'react';
import a from './ProfileInfo.module.css';



const ProfileInfo = () => {
	return (
		<div>

			<div className="wallpaper">
				<img className={a.space} src='https://newevolutiondesigns.com/images/freebies/galaxy-wallpaper-29.jpg'></img>
			</div>

			<div className={a.descriptionBlock}>
			ava + description
	</div>

		</div>
	)
};

export default ProfileInfo;


