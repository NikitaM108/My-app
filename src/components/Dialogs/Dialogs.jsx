import React from 'react';
import s from './Dialogs.module.sass';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';




const Dialogs = (props) => {

	let state = props.dialogsPage;


	let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
	let messagesElements = state.messagesData.map(mess => <Message message={mess.message} key={mess.id}  id={mess.id} />);
	let newMessageBody = state.newMessageBody;
	


	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	}

	if(!props.isAuth ) return <Redirect to ={'/login'} />;

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}

			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
			</div>
			<AddMessageReduxForm onSubmit={addNewMessage}/>
		</div>

	)

}

const AddMessageForm = (props) =>{
	return (
		<form onSubmit={props.handleSubmit}>
				<div>
					<div>
						<Field 	component="textarea" name="newMessageBody" 	placeholder="Write message"/>
					</div>
					<div>
						<button >Send</button>
					</div>

				</div>
				</form>
	)
}
const AddMessageReduxForm=reduxForm({form:"dialogAddMessageForm"}) (AddMessageForm)
export default Dialogs;