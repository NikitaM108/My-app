import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreater, sendMessageCreater } from '../../Redux/state';


const Dialogs = (props) => {

	let state = props.store.getState().dialogsPage;


	let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
	let messagesElements = state.messagesData.map(mess => <Message message={mess.message} id={mess.id} />);
	let newMessageBody = state.newMessageBody;
	
	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreater())

	}

	let onNewMessageChange = (event) => {
		let body = event.target.value;
		props.store.dispatch(updateNewMessageBodyCreater(body));

	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}

			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
				<div>
					<div>
						<textarea 
						value= {newMessageBody}
						onChange= {onNewMessageChange}
						placeholder='Write message'></textarea>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Send</button>
					</div>

				</div>

			</div>
		</div>

	)

}

export default Dialogs;