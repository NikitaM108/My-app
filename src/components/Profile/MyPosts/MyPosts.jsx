import React from 'react';
import a from './MyPosts.module.sass';
import Post from './Post/Post';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
		width: 300,
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 400,
	},
	dense: {
		marginTop: theme.spacing(2),
	},

}));



const MyPosts = (props) => {
	let classes = useStyles();


	let postsElements = props.postData.map(p => <Post message={p.message} id={p.id} likeCount={p.likeCount} />);

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();

	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);



	}
	return <div className={a.postsBlock}>
		<div className={a.title}>
			<Typography variant="h5" gutterBottom >
				My posts
      </Typography>
		</div>
		<Divider variant="fullwith" />
		<div>
			<div>
				<TextField
					id="outlined-with-placeholder"
					className={classes.textField}
					margin="normal"
					variant="outlined"
					onChange={onPostChange}
					inputRef={newPostElement}
					value={props.newPostText}
				/>
			</div>

			<div>
				<Button onClick={onAddPost} variant="contained" color="primary" className={classes.button}>
					Add Post
      </Button>
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

