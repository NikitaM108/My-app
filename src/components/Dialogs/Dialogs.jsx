import React from 'react';
import s from './Dialogs.module.sass';
import DialogItem from './DialogItem/DialogItem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';






class Dialogs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newMessageBody: ''
		}
	}

	
	onSendMessageClick = () =>{
		this.props.sendMessage(this.state.newMessageBody);
		this.setState({newMessageBody: ''});
	}
	onNewMessageChange = (e) =>{
		let body = e.target.value;
		this.setState({newMessageBody: body});
	}
	
	render () {
		const list = this.props.dialogsPage.dialogs;
		const messages = list.map((dialog, index) => <DialogItem name={dialog.name} key={`item-${index}`} message={dialog.msg} isMe={dialog.isMe} />)
		return (
			<div >
				<div className={s.title}>
					<Typography variant="h3" gutterBottom >
						Conversation
				</Typography>
				</div>
				<Divider variant="fullWidth" />

				{messages}
			
				<Divider variant="fullWidth" />

				<div className={s.inputPos}>
				<TextField
					id="standard-full-width"
					label="Please,"
					style={{ margin: 2}}
					helperText=" to another user"
					margin="normal"
					InputLabelProps={{
						shrink: true,
					}}
					rows={2}
					placeholder="Write message"
					className = {s.input}
					value = {this.state.newMessageBody}
					onChange = {this.onNewMessageChange.bind(this)} 
				/>
				</div>

				<div className={s.buttonPos}>
						<Button onClick={this.onSendMessageClick.bind(this)} variant="outlined" color="primary" className={s.button} >
							Send
					</Button>
					</div>

			</div>

		)
	}

}

export default Dialogs;