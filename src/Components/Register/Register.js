import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Context';
import './Register.css';

const Register = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();
    const { updateUser } = useContext(UserContext);
	const history = useHistory();

	const handleSubmit = (e) => {
        if (password === confirmPassword) {
            
            e.preventDefault();
            
            const account = {
                name,
                email,
                password,
            };
            
            const user = {
                email,
                password
            }
            localStorage.setItem('credentials', JSON.stringify(account));
            localStorage.setItem('activeUser', JSON.stringify(user));
            updateUser(user)
            history.push('/profile');
        } else {
            e.preventDefault();
            alert('Passwords do not match!')
        }
    }

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
