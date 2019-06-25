import React from 'react';
import a from './Post.module.sass';

const Post = (props) => {

	return (

		<div className={a.item}>
			<div className={a.name}>User</div>
			<img src='https://avatarfiles.alphacoders.com/127/127710.jpg'></img>
			<div className={a.border}></div>
			<div className={a.message}>
				{props.message}
			</div>

			<div>

			</div>

		</div>




	)

}



export default Post;

