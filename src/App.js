import React from 'react';
import './App.sass';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';



const App = (props) => {


	return (
	<MuiPickersUtilsProvider utils={DateFnsUtils}>
		
		<div className='app-wrapper'>
			<HeaderContainer />
			<Navbar />
			<div className='app-wrapper-content' >
			
			
				<Route path='/dialogs' render={() => <DialogsContainer />} />
				<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
				<Route path='/users' render={() => <UsersContainer />} />
				<Route path='/login' render={() => <Login />} />
			</div>



			
		</div>
	</MuiPickersUtilsProvider>
		);
}

export default App;


