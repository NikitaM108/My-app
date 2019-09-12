import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import s from './Coming.module.sass'


const Settings = () => {
return <div>
	<div className={s.title}>
					<Typography variant="h3" gutterBottom >
					Coming Soon
				</Typography>
				</div>
				<Divider variant="fullWidth" />
</div>	
};


export default Settings;