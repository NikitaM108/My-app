const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';


let initialState = {
	dialogs: [
		{ 
			name: 'User second name',
			msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis nunc nec enim facilisis tempus. Nulla facilisi.',
			isMe: false
		},
		{ 
			name: 'User first name',
			msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis nunc nec enim facilisis tempus. Nulla facilisi. Nunc lacinia, odio at pharetra dignissim, lorem dolor auctor ante, eu interdum nisl sem in est. In at venenatis metus, eget pellentesque ex. Aenean arcu quam, sodales nec bibendum varius, condimentum ut ligula.',
			isMe: true
		}
	],
	secondUser:[
		{id: 1, name: 'User second name'}
	],

	messagesData: [
		{ id: 1, message: ' ' },
		
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
					dialogs: [...state.dialogs, action.body]
					
				};
	
				
		
		default:
			return state;
	}

}

export const sendMessageCreater = () => ({ type: SEND_MESSAGE  })
export const updateNewMessageBodyCreator =(body) => ({type:UPDATE_NEW_MESSAGE_BODY, body })

export default dialogsReducer;