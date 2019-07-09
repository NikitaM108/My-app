import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	margin: {
    margin: theme.spacing(1),
  },
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
	state ={
		editMode: false,
		status: this.props.status
	}
	activateEditMode = ()=> {
		this.setState( {
			editMode: true
		});
	}
	
	deactivateEditMode = () =>{
		this.setState({
			editMode: false
		});
		this.props.updateStatus(this.state.status);
	}
	onStatusChange = (e) => {
		this.setState({
			status:	e.currentTarget.value
		})
	}

	componentDidUpdate (prevProps, prevState) {
		if(prevProps.status !== this.props.status) {
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
						<CssTextField className={this.classes.margin} id="custom-css-standard-input" label="Status"
						 onClick={this.activateEditMode} value={this.props.status}/>
						 
					</div>
				}
				{this.state.editMode &&
					<div>
							<CssTextField className={this.classes.margin} id="custom-css-standard-input" label="Status"
							 onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus