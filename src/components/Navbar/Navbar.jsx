import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Navbar.module.sass';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle'
import People from '@material-ui/icons/People'
import Chat from '@material-ui/icons/Chat'
import Business from '@material-ui/icons/Business'
import LibraryMusic from '@material-ui/icons/LibraryMusic'
import BasicDateTimePicker from './DataPicker';



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},

	toolbar: theme.mixins.toolbar
}));

const Navbar = () => {
	const classes = useStyles();
	return <nav className={s.menu}  >
		<CssBaseline />
		<Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper, }}>
			<div className={classes.toolbar} />
			<List className={s.item}>
				<div>
					<NavLink to="/profile">
						{['Profile',].map((text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>{index % 2 === 0 ? <AccountCircle /> : <MailIcon />}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</NavLink>
				</div>
				<div>
					<NavLink to="/dialogs">{['Messages'].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>{index % 2 === 0 ? <Chat /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}</NavLink>
				</div>
				<div>
					<NavLink to="/users">{['Users',].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>{index % 2 === 0 ? <People /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}</NavLink>
				</div>
				<div>
					<NavLink to="/news">{['News',].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>{index % 2 === 0 ? <Business /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))} </NavLink>
				</div>
				<div>
					<NavLink to="/music" >{['Music',].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>{index % 2 === 0 ? <LibraryMusic /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}</NavLink>
				</div>
				<div>
					<NavLink to="/settings">{['Settings',].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}</NavLink>
				</div>
			</List>
			<Divider/>
			<div className={s.date}>
				<BasicDateTimePicker />
			</div>

		</Drawer>
	</nav>
}

export default Navbar;