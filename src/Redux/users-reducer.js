const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
	users: [
		{ id: 1, photoUrl:'https://memepedia.ru/wp-content/uploads/2019/03/u-suka-10.jpg', followed: true, fullName: 'Misha', status: 'status will be here', location: { city: 'Kaluga', country: 'Russia' } },
		{ id: 2, photoUrl:'https://memepedia.ru/wp-content/uploads/2019/03/u-suka-10.jpg', followed: false, fullName: 'Grisha', status: 'status will be here', location: { city: 'Penza', country: 'Russia' } },
		{ id: 3, photoUrl:'https://memepedia.ru/wp-content/uploads/2019/03/u-suka-10.jpg', followed: true, fullName: 'Pasha', status: 'status will be here', location: { city: 'Moscow', country: 'Russia' } },
		{ id: 4, photoUrl:'https://memepedia.ru/wp-content/uploads/2019/03/u-suka-10.jpg', followed: false, fullName: 'Kate', status: 'status will be here', location: { city: 'New-York', country: 'USA' } },
		{ id: 5, photoUrl:'https://memepedia.ru/wp-content/uploads/2019/03/u-suka-10.jpg', followed: true, fullName: 'Takeshi', status: 'status will be here', location: { city: 'Osaka', country: 'Japan' } },
	]
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map( users => {
					if (users.id === action.userId) {
						return { ...users, followed: true }
					}
					return users;

				})
			}
		

		case UNFOLLOW:
				return {
					...state,
					users: state.users.map(users => {
						if (users.id === action.userId) {
							return { ...users, followed: false }
						}
	
						return users;
	
					})
				}
		case SET_USERS:
				return {
					...state,
					users: [...state.users, ...action.users]
				}

		default: 
			return state;

	}
}

export const FollowAC = (userId) => ({ type: FOLLOW, userId })
export const UnfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const SetUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;