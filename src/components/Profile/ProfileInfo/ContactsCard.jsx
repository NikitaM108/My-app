import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ContactsImage from '../../../assets/images/Contacts.jpg'
import ListLinks from './List';


const useStyles = makeStyles(theme => ({
  card: {
		width: 453,

		
		
  },
  media: {
    height: 0,
    paddingTop: '40.25%', // 16:9
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
    backgroundColor: red[500],
  },
}));

const ContactsCard = (props) => {
  let classes = useStyles();


  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={ContactsImage}
        title="Contacts"
      />
      <CardContent>
			<Typography variant="h5" color="textPrimary" component="p">
          Contacts:
        </Typography>
        <ListLinks />
      </CardContent>
    </Card>
  );

}

export default ContactsCard ;
