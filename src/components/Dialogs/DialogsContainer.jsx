import React from 'react';
import { updateNewMessageBodyCreater, sendMessageCreater } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';



let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage

	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreater(body));
		},
		sendMessage: () => {
			dispatch(sendMessageCreater());
		}
		
	}
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);
export default DialogsContainer;