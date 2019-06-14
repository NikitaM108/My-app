import * as axios from 'axios';

const instance = axios.create({

	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/', 
	headers: {
		"API-KEY": "8b6d6d36-525c-4671-8e20-3454fab7f0a1"
	}
});

export const usersAPI = {
getUsers(currentPage, pageSize)  {
	return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => {
			return response.data;
		});
},
follow(userId){
	return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
						

		
},
unfollow(userId){
	return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
}

}

