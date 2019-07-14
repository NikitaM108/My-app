import React from 'react';
import a from './MyPosts.module.sass';
import Post from './Post/Post';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Field, reduxForm } from 'redux-form';



const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
		width: 300,
		left: 10,
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 400,
		left: 10,
	},
	dense: {
		marginTop: theme.spacing(2),
	},

}));




const MyPosts = (props) => {
	let classes = useStyles();

	let postsElements = props.postData.map(p => <Post message={p.message} id={p.id} likeCount={p.likeCount} />);

	let onAddPost = (values) => {
		props.addPost(values.newPostText)
	}

	return <div className={a.postsBlock}>
		<div className={a.title}>
			<Typography variant="h5" gutterBottom >
				My posts
      </Typography>
		</div>
		<Divider variant="fullwith" />
		<AddNewPostReduxForm onSubmit={onAddPost} />

		<div>
			<div className={a.posts}>
				{postsElements}
			</div>
		</div>
	</div>

}

const renderTextField = ({
	input, 
	type,
}) => (
		<TextField
			id="outlined-with-placeholder"
			label="Write a post"
			placeholder="Placeholder"
			margin="normal"
			variant="outlined"
			input {...input} 
			type={type} 
			
			
			
		/>)



const AddNewPostForm = (props) => {

	return (
		<form onSubmit={props.handleSubmit}>
			<div className={a.textInput}>
				<Field
					component={renderTextField}
					name="newPostText"
					
				/>
			</div>
			
			<div className={a.posts}>
				<Button onClick={props.handleSubmit} variant="contained" color="primary">
					Add Post
				</Button>
			</div>

		</form>

	)
}

const AddNewPostReduxForm = reduxForm({ form: "profileAddNewPostForm" })(AddNewPostForm)

export default MyPosts;

