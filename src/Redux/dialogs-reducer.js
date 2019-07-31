const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';


let initialState = {
	dialogs: [
		{ id: 1, name: 'User first name' },
		
	],
	secondUser:[
		{id: 1, name: 'User second name'}
	],

	messagesData: [
		{ id: 1, message: ' ' },
		
	],
	secondMessagesData:[
		{id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet tincidunt dui, eu lobortis eros. Nullam non mauris auctor, sagittis ex vitae, varius odio. Nam maximus sed arcu a porttitor. Donec sollicitudin, dui sed faucibus aliquet, risus libero ultricies erat, quis pulvinar purus nulla non ex. ' },
	],

	newMessageBody: "",

	

};

const dialogsReducer = (state = initialState, action) => {


	
	switch (action.type) {

		case SEND_MESSAGE:
			let body = state.newMessageBody;
				return {
					...state,
					newMessageBody: "",
					messagesData: [...state.messagesData, { id: 4, message: body }]
				};

		case UPDATE_NEW_MESSAGE_BODY:
				return {
					...state,
					newMessageBody: action.body
					
				};
	
				
		
		default:
			return state;
	}

}

export const sendMessageCreater = () => ({ type: SEND_MESSAGE  })
export const updateNewMessageBodyCreator =(body) => ({type:UPDATE_NEW_MESSAGE_BODY, body })

export default dialogsReducer;