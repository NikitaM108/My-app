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
		editMode: false
	}
	activateEditMode () {
		this.setState( {
			editMode: true
		});
	}
	
	deactivateEditMode () {
		this.setState({
			editMode: false
		});
		
		

	}
	render() {
		
		return (
			<div>
				{!this.state.editMode &&
					<div>
						<CssTextField className={this.classes.margin} id="custom-css-standard-input" label="Status"
						 onDoubleClick={this.activateEditMode.bind(this)} value={this.props.status}/>
						 
					</div>
				}
				{this.state.editMode &&
					<div>
							<CssTextField className={this.classes.margin} id="custom-css-standard-input" label="Status" 
							autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus