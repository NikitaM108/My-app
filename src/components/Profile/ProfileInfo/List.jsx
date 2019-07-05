import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
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
        <ListItem button>
          <ListItemIcon>
            < FingerprintIcon />
          </ListItemIcon>
          <ListItemLink href="https://ru-ru.facebook.com/">Facebook</ListItemLink>
        </ListItem>
				<Divider variant="fullwith" />
        <ListItem button>
          <ListItemIcon>
            < FingerprintIcon  />
          </ListItemIcon>
          <ListItemLink href="https://www.instagram.com/">Instagram</ListItemLink>
        </ListItem>
				<Divider variant="fullwith" />
				<ListItem button>
          <ListItemIcon>
            < FingerprintIcon  />
          </ListItemIcon>
          <ListItemLink href="https://vk.com/">Vk</ListItemLink>
        </ListItem>
				<Divider variant="fullwith" />
      </List>
      
    </div>
  );
}

export default ListLinks;