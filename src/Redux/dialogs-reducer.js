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
	

};

const dialogsReducer = (state = initialState, action) => {


	
	switch (action.type) {

		case SEND_MESSAGE:
				let body = action.newMessageBody;
				return {
					...state,
					messagesData: [...state.messagesData, { id: 4, message: body }]
				};
		
		default:
			return state;
	}
}

export const sendMessageCreater = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;