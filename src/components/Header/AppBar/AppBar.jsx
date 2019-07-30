import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import style from '../Header.module.sass';
import BlurOn from '@material-ui/icons/BlurOn'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
	},
	appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
}));


const AppBarComponent = (props) => {
	const classes = useStyles();
	return  (
    <div className={classes.root}>
      <AppBar position="fixed"  className={classes.appBar}>
        <Toolbar>
  
            <BlurOn edge="start" className={classes.menuButton} />
          
          <Typography variant="h6" className={classes.title}>
            My React App
          </Typography>
          <Button onClick={props.logout} color="inherit"> {props.isAuth ? props.login :
						<NavLink className={style.login} to={'/Login'} >Sing In, Please</NavLink>} 
					</Button>
					
        </Toolbar>
      </AppBar>
    </div>
  );
}

 export default AppBarComponent;