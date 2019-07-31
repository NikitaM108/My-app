import {sendMessageCreater, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import {compose} from 'redux';



let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		

	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(sendMessageCreater());
		},

		updateNewMessageBody: (body)=> {
			dispatch(updateNewMessageBodyCreator(body))
		}
		
	}
}

export default compose (
	connect (mapStateToProps, mapDispatchToProps),
	withAuthRedirect
) (Dialogs);