import React from 'react';
import a from './Post.module.sass';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import AccountCircleIcon from'@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
avatar: {
	backgroundColor: teal[500], 
	width: 50,
	height: 50,
},
});

const Post = (props) => {
	const classes = useStyles();
	return (

		<div className={a.item}>
			<div className={a.name}>User</div>
			<Avatar className={classes.avatar}>
        <AccountCircleIcon fontSize='large'/>
      </Avatar>
			
			<Typography variant="body1" gutterBottom>
			<div className={a.message}>
				{props.message}
			</div>
			</Typography>
			<Divider variant="middle" />

			<div>

			</div>

		</div>




	)

}



export default Post;

