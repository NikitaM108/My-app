import React from 'react';
import a from './MyPosts.module.sass';
import Post from './Post/Post';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';







const MyPosts = React.memo((props) => {
	let postsElements = props.postData.map(p => <Post message={p.message} key={p.id} id={p.id} likeCount={p.likeCount} />);
	let newPostsElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPostsElement.current.value;
		props.updateNewPostText(text);
	}

	return <div className={a.MainContainer}>
		<div className={a.Title}>
			<Typography variant="h3" gutterBottom >
				My posts
      </Typography>
		</div>
		<div className={a.AddPostContainer}>
			<TextField
				id="outlined-with-placeholder"
				label="Write a post"
				placeholder="Write a post"
				margin="normal"
				variant="outlined"
				className={a.PostInput}
				onChange={onPostChange}
				value={props.newPostText}
				inputRef={newPostsElement}
			/>
			<Button onClick={onAddPost} variant="contained" color="primary" className={a.AddBtn}>
				Add Post
			</Button>
		</div>



		<div>
			<div className={a.posts}>
				{postsElements}
			</div>
		</div>
	</div>

})


export default MyPosts;

