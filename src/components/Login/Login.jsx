import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../../Redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import s from './Login.module.sass'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button';




const validate = values => {
  const errors = {}
  const requiredFields = [ 'password', 'email' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}


const renderTextField = ({
	input,
	label,
	meta: { touched, invalid, error },
	...custom,
}) => (
		<TextField
			margin="normal"
			variant="outlined"
			error={touched && invalid}
			helperText={touched && error}
			{...input}
			{...custom}



		/>
	)

const renderCheckbox = ({ input, label, }) => (
	<div>
		<FormControlLabel
			control={
				<Checkbox
					checked={input.value ? true : false}
					onChange={input.onChange}
				/>
			}
			label={label}
		/>
	</div>
)


const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={s.block}>
			<div >
				<div>
					<Typography variant="h6" gutterBottom >
						Email:
			</Typography>
					<Field id="outlined-email-input" type="email"
						autoComplete="email" placeholder={"Email"} name={"email"} component={renderTextField}
						label="Email" className={s.length}></Field>
				</div>
				<div >
					<Typography variant="h6" gutterBottom >
						Password:
			</Typography>
					<Field  placeholder={"Password"} id="outlined-password-input" label="Password"
						type="password" autoComplete="current-password" name={"password"}
						component={renderTextField} className={s.length} ></Field >
				</div>
				<div className={s.elements}>
					<div >
						<Field type={"checkbox"} name={"rememberMe"} label="Remember Me" component={renderCheckbox}></Field >
					</div>
					<div>
						<Button onClick={props.handleSubmit} variant="contained" color="primary" className={s.buttonPos}>
							Log In
      			</Button>
					</div>
				</div>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login', validate })(LoginForm)



const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	}
	if (props.isAuth)
		return <Redirect to={`/profile`} />

	return <div>
		<Typography className={s.title} variant="h5" gutterBottom >
			Login
		</Typography>
		<Divider variant="fullWidth" />

		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);