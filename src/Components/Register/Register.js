import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Register.css';

const Register = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();

	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		// send data on post route here
		const account = {
			name,
			email,
			password,
		};
		localStorage.setItem('credentials', JSON.stringify(account));
		history.push('/profile');
	};

	const updateName = (e) => {
		setName(e.target.value);
	};
	const updateEmail = (e) => {
		setEmail(e.target.value);
	};
	const updatePassword = (e) => {
		setPassword(e.target.value);
	};
	const updateConfirmPassword = (e) => {
		setConfirmPassword(e.target.value);
	};

	return (
		<div className="register-overlay">
			<div className="register-container">
				<h2 className="register-title">New? Make an Account!</h2>
				<form className="register-form" onSubmit={handleSubmit}>
					<label>
						Name:
						<input
							type="text"
							className="email"
							onChange={updateName}
						/>
					</label>
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
					<label>
						Confirm Password:
						<input
							type="password"
							className="password"
							onChange={updateConfirmPassword}
						/>
					</label>
					<br />
					<button type="submit" className="btn-submit">
						Make an Account
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
