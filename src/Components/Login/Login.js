import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Context';
import './Login.css';

const Login = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const { updateUser } = useContext(UserContext);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();

		const credentials = JSON.parse(localStorage.getItem('credentials'));
		let user = { email, password };

		if (
			user.email === credentials.email &&
			user.password === credentials.password
		) {
            localStorage.setItem('activeUser', JSON.stringify(user));
            updateUser(user);
			history.push('/profile');
		} else {
			alert('wrong username and/or password, please try again');
		}
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};
	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	return (
		<div className="login-overlay">
			<div className="login-container">
				<h2 className="login-title">Login:</h2>
				<form className="login-form" onSubmit={handleSubmit}>
					<label>
						Email Address:
						<input
							type="text"
							className="email"
							onChange={updateEmail}
						/>
					</label>
					<label>
						Password:
						<input
							type="password"
							className="password"
							onChange={updatePassword}
						/>
					</label>
					<br />
					<button type="submit" className="btn-submit">
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
