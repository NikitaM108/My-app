const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
	dialogs: [
		{ id: 1, name: 'Misha' },
		{ id: 2, name: 'Andrew' },
		{ id: 3, name: 'grisha' }
	],

	messagesData: [
		{ id: 1, message: 'Hello!' },
		{ id: 2, message: 'Hello!' },
		{ id: 3, message: 'Hello!' }
	],
	newMessageBody: ""

};

const dialogsReducer = (state = initialState, action) => {


	
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
				return {
					...state,
					newMessageBody:action.body
				}
		
		case SEND_MESSAGE:
				let body = state.newMessageBody;
				return {
					...state,
					newMessageBody: '',
					messagesData: [...state.messagesData, { id: 4, message: body }]
				};
		
		default:
			return state;
	}
}

export const sendMessageCreater = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreater = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;