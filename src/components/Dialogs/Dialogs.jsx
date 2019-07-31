import React from 'react';
import s from './Dialogs.module.sass';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import { orange } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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



const Dialogs = (props) => {
	const classes = useStyles();

	let state = props.dialogsPage;


	let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
	let secondDialogsElements = state.secondUser.map(secondUser => <DialogItem name={secondUser.name} key={secondUser.id} id={secondUser.id} />);
	let messagesElements = state.messagesData.map(mess => <Message message={mess.message} key={mess.id} id={mess.id} />);
	let secondMessagesData = state.secondMessagesData.map(secondMessagesData => <Message message={secondMessagesData.message} key={secondMessagesData.id} id={secondMessagesData.id} />);
	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () =>{
		props.sendMessage();

	}
	let onNewMessageChange = (e) =>{
		let body = e.target.value;
		props.updateNewMessageBody(body);
	}
	

	if (!props.isAuth) return <Redirect to={'/login'} />;

	return (
		<div >
			<div className={s.title}>
				<Typography variant="h5" gutterBottom >
					Conversation
      </Typography>
			</div>
			<Divider variant="fullWidth" />


			<div className={s.name}>
				<div className={s.anotherAvatar}>
					<Avatar className={classes.anotherAvatar}>
						<AccountCircleIcon fontSize='large' />
					</Avatar >
				</div>
				<Typography variant="body1" gutterBottom className={s.namePosition}>
					{dialogsElements}
				</Typography>
			</div>
			<div className={s.messages}>
				<Typography variant="body1" gutterBottom >
					{secondMessagesData}
				</Typography>
			</div>
			<Divider variant="fullWidth" />




			<div className={s.nameSecond}>
				<Typography variant="body1" gutterBottom className={s.namePosition} >
					{secondDialogsElements}
				</Typography>
				<div className={s.avatar}>
					<Avatar className={classes.avatar}>
						<AccountCircleIcon fontSize='large' />
					</Avatar >
				</div>
			</div>
			<div className={s.messagesSecond}>
				<Typography variant="body1" gutterBottom>
					{secondMessagesData}
				</Typography>
			</div>
			<Divider variant="fullWidth" />

			<div className={s.nameSecond}>
				<Typography variant="body1" gutterBottom className={s.namePosition} >
					{secondDialogsElements}
				</Typography>
				<div className={s.avatar}>
					<Avatar className={classes.avatar}>
						<AccountCircleIcon fontSize='large' />
					</Avatar >
					</div>
			</div>
			<div className={s.messages}>
					{messagesElements}
			</div>
			<Divider variant="fullWidth" />

			<div className={s.inputPos}>
			<TextField
        id="standard-full-width"
        label="Please,"
        style={{ margin: 8 }}
        helperText=" to another user"
        margin="normal"
        InputLabelProps={{
          shrink: true,
				}}
				rows={2}
				placeholder="Write message"
				className = {s.input}
				value = {newMessageBody}
				onChange = {onNewMessageChange} 
      />
			</div>

			<div className={s.buttonPos}>
					<Button onClick={onSendMessageClick} variant="outlined" color="primary" className={s.button} >
						Send
      	</Button>
				</div>

		</div>

	)

}

export default Dialogs;