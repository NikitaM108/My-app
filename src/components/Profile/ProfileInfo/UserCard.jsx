import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import userPhoto from '../../../assets/images/avatar.jpg'
import ProfileStatus from './ProfileStatus';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from'@material-ui/icons/AccountCircle';
import { teal } from '@material-ui/core/colors';
import { indigo} from '@material-ui/core/colors';
import { blueGrey} from '@material-ui/core/colors';
import s from './ProfileInfo.module.sass'


const useStyles = makeStyles(theme => ({
	card: {
		maxWidth: 440,
		marginLeft: 20,
		marginTop: 10,
		borderBlockColor: indigo[500],
		// backgroundColor: blueGrey[50],
		

	},
	media: {
		height: 0,
		paddingTop: '40.25%',  //16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: teal[500], 
		width: 50,
		height: 50,
	},
	margin: {
		margin: theme.spacing(1),
	},
 	text: {
		 variant:"h5"
	},
	
}));

const UserCard = (props) => {
	let classes = useStyles();
	let [expanded, setExpanded] = React.useState(false);

	function handleExpandClick() {
		setExpanded(!expanded);
	}

	return (
		<Card className={classes.card}>
			<CardHeader
				avatar={
					<Avatar className={classes.avatar}>
        <AccountCircleIcon fontSize='large'/>
      </Avatar>
				}
				title={props.profile.fullName}
				subheader={props.profile.aboutMe}
				action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }

			/>
			<CardMedia
				className={classes.media}
				image={props.profile.photos.large != null ? props.profile.photos.large : userPhoto }
				
			/>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
        </Typography>
			</CardContent>
			<CardActions disableSpacing>

				<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="Show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>Hobby:</Typography>
					<Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet tincidunt dui, eu lobortis eros. 
					Nullam non mauris auctor, sagittis ex vitae, varius odio. Nam maximus sed arcu a porttitor. 
					Donec sollicitudin, dui sed faucibus aliquet, risus libero ultricies erat, quis pulvinar purus nulla non ex. 
					Sed sagittis lectus quis urna porta, at egestas sapien luctus.
          </Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}

export default UserCard;