import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import PublicIcon from '@material-ui/icons/Public';


const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	link: {
		margin: theme.spacing(2),
		marginTop: 40,
	},
}));

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

const ListLinks = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<List component="nav" aria-label="Default links">
				<ListItemLink href="https://ru-ru.facebook.com/">
					<ListItemIcon>
						<PublicIcon />
					</ListItemIcon>
					Facebook
				</ListItemLink>
				<Divider variant="fullWidth" />
				<ListItemLink href="https://www.instagram.com/">
					<ListItemIcon>
						<PublicIcon />
					</ListItemIcon>
					Instagram
				</ListItemLink>
				<Divider variant="fullWidth" />
					<ListItemLink href="https://vk.com/">
					<ListItemIcon>
						<PublicIcon />
					</ListItemIcon>
					Vk
				</ListItemLink>
				<Divider variant="fullWidth" />
			</List>

		</div>
	);
}

export default ListLinks;