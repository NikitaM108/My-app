import React from 'react';
import s from './../Dialogs.module.sass';
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {

	let path = "/dialogs/" + props.id;
	
	return <NavLink to={path} className={s.dialog }>{props.name}</NavLink>
		




	
}



export default DialogItem;