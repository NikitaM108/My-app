import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';
import SaveIcon from '@material-ui/icons/Save';
import s from "./ProfileInfo.module.sass";



const useStyles = makeStyles(theme => ({
	margin: {
		margin: theme.spacing(1),
	},
	fab: {
		margin: theme.spacing(1),
	},
	button: {
		margin: theme.spacing(1),
	},
	rightIcon: {
		marginRight: theme.spacing(1),
	},
	iconSmall: {
		fontSize: 20,
	},
	textField: {
		width: 200,
		position: "absolute",
	

		

	}
}));

const CssTextField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: 'green',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'green',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'red',
			},
			'&:hover fieldset': {
				borderColor: 'yellow',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'green',
			},
		},
	},
})(TextField);


const ProfileStatusWithHooks = (props) => {
	const classes = useStyles();
	 
	 let [editMode, setEditMode] = useState(false);
	 let [status, setStatus] = useState(props.status);

	 useEffect(() => {
		setStatus(props.status);
	 }, [props.status]);

	 const activatedEditMode = () => {
		 setEditMode(true);
	 }

	 const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
		
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	}
	
	
		return (
			<div>
				{ !editMode &&
					<div>
						<div>
							<TextField
								id="standard-read-only-input"
								label="Change Status" 
								className={classes.textField}
								InputProps={{ readOnly: true, }}
								value={props.status}/>
							<Fab size="small" color="primary" aria-label="Edit" className={s.button}
								onClick={activatedEditMode} >
								<Icon>edit_icon</Icon>
							</Fab>
						</div>
					</div>


				}

				{editMode &&
					<div>
						<CssTextField className={classes.margin} id="custom-css-standard-input" label="Change Status"
							onChange={onStatusChange} autoFocus={true} value={status}/>
						<Fab size="small" color="primary" aria-label="Edit" className={classes.fab}
							onClick={deactivateEditMode}	 >
							<SaveIcon className={clsx(classes.rightIcon, classes.iconSmall)} />
						</Fab>
					</div>
				}
			</div>
		)
	}


export default ProfileStatusWithHooks;