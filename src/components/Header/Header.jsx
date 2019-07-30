import React from 'react';
import style from './Header.module.sass'
import AppBarComponent from './AppBar/AppBar';




const Header = (props) => {
	return <header className={style.header}>
		<AppBarComponent isAuth={props.isAuth} login={props.login} logout={props.logout} />
	</header>
}

export default Header;