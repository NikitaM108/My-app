import React from 'react';
import a from './Post.module.css';

const Post = (props) => {

	return (

		<div className={a.item}>
			<img src='https://avatarfiles.alphacoders.com/127/127710.jpg'></img>
			
			{props.message}
			<div>
				<span>Like</span> {props.likeCount}
			</div>
		
			</div>
			
	
			
			
	)

}



export default Post;

