const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
	dialogs: [
		{ id: 1, name: 'User first name' },
		
	],

	messagesData: [
		{ id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet tincidunt dui, eu lobortis eros. Nullam non mauris auctor, sagittis ex vitae, varius odio. Nam maximus sed arcu a porttitor. Donec sollicitudin, dui sed faucibus aliquet, risus libero ultricies erat, quis pulvinar purus nulla non ex. ' },
		
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