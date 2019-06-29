import React from 'react';
import a from './ProfileInfo.module.sass';

class ProfileStatus extends React.Component {
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
						<span onDoubleClick={this.activateEditMode.bind(this)} className={a.input}>{this.props.status}</span>
					</div>
				}
				{this.state.editMode &&
					<div>
						<input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} className={a.input}></input>
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus