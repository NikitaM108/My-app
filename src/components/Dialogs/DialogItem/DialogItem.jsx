import React from 'react';
import s from './../Dialogs.module.sass';
import { NavLink } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles({
	avatar: {
		backgroundColor: teal[500],
		width: 50,
		height: 50,


	},
	anotherAvatar: {
		backgroundColor: orange[500],
		width: 50,
		height: 50,
	},



});

const DialogItem = (props) => {
	const classes = useStyles();
	let path = "/dialogs/" + props.id;
	
	return <div className={s.messageContainer}>
		<div className={props.isMe ? s.headerRowOut : s.headerRowIn}>
			<Avatar className={props.isMe ? classes.avatar : classes.anotherAvatar}>
				<AccountCircleIcon fontSize='large' />
			</Avatar >
			<NavLink to={path} className={s.dialog}>{props.name}</NavLink>
		</div>
		<Typography className={props.isMe ? s.BodyRowOut : s.BodyRowIn} component={"span"} variant="body1" gutterBottom>
			{props.message}
		</Typography>
	</div>
		




	
}



export default DialogItem;