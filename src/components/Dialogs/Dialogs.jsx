import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {


	let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

	let messagesElements = props.state.messagesData.map(mess => <Message message={mess.message} id={mess.id} />);

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}

			</div>
			<div className={s.messages}>
				{messagesElements}
				<h3>Write message</h3>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add message</button>
				</div>

			</div>
		</div>

	)

}

export default Dialogs;