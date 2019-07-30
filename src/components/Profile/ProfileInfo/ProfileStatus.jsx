import React from 'react';
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
	leftIcon: {
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


class ProfileStatus extends React.Component {
	classes = useStyles
	state = {
		editMode: false,
		status: this.props.status
	}
	activateEditMode = () => {
		this.setState({
			editMode: true
		});
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		});
		this.props.updateStatus(this.state.status);
	}
	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}
	render() {
		return (
			<div>
				{!this.state.editMode &&
					<div>
						<div>
							<TextField
								id="standard-read-only-input"
								label="Change Status" 
								className={this.classes.textField}
								InputProps={{ readOnly: true, }}
								value={this.props.status} />
							<Fab size="small" color="primary" aria-label="Edit" className={s.button}
								onClick={this.activateEditMode} >
								<Icon>edit_icon</Icon>
							</Fab>
						</div>
					</div>


				}

				{this.state.editMode &&
					<div>
						<CssTextField className={this.classes.margin} id="custom-css-standard-input" label="Change Status"
							onChange={this.onStatusChange} autoFocus={true} value={this.state.status} />
						<Fab size="small" color="primary" aria-label="Edit" className={this.classes.fab}
							onClick={this.deactivateEditMode}	 >
							<SaveIcon className={clsx(this.classes.leftIcon, this.classes.iconSmall)} />
						</Fab>
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus