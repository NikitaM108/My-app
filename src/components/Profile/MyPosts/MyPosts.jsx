import React from 'react';
import a from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {

	
	let postsElements = props.postData.map(p=> <Post message={p.message} id = {p.id} likeCount={p.likeCount} />);

	let newPostElement = React.createRef();
	
	let  onAddPost = () => {
			props.addPost();

	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
		

	}

	return <div className={a.postsBlock}>
		<h3>My posts</h3>
		<div>
			<div>
				<textarea onChange={onPostChange} ref={newPostElement} value = {props.newPostText}/>
			</div>
			<div>
				<button onClick = { onAddPost }>Add post</button>
			</div>


		</div>
		<div>
			<div className={a.posts}>
				{postsElements}

			</div>
		</div>
	</div>

}

export default MyPosts;

