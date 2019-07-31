import React from 'react';
import Typography from '@material-ui/core/Typography';









const Message = (props) => {


	return <Typography component={"span"} variant="body1" gutterBottom>
		{props.message}
	</Typography>
		
}



export default Message;