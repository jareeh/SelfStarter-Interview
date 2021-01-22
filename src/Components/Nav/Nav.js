import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory, } from 'react-router-dom';
import './Nav.css';
import logo from '../../Jefflix.png';
import avatar from '../../avatar.png';
import UserContext from '../../Context';

function Nav() {
	const [show, setShow] = useState();
	const { user, updateUser } = useContext(UserContext);
	const history = useHistory();

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setShow(true);
			} else {
				setShow(false);
			}
			return () => {
				window.removeEventListener('scroll');
			};
		});
	}, []);

	const handleLogout = () => {
		updateUser(null);
		localStorage.removeItem('activeUser');
		history.push('/')
	}

	return (
		<>
			<div className={`nav ${show && 'nav-black'}`}>
				<Link to="/">
					<img src={logo} alt="Jefflix logo" className="nav-logo" />
				</Link>

				{user?.email ? (
					<>
						<h2 className="user-name">Hello, {user.email}</h2>
						<button className="login" onClick={handleLogout}>Logout</button>
					</>
				) : (
					<>
						<Link to="/login">
							<button className="login">Login</button>
						</Link>

						<Link to="/register">
							<button className="register">Register</button>
						</Link>
					</>
				)}

				<Link to="/profile">
					<img src={avatar} alt="Avatar" className="nav-avatar" />
				</Link>
			</div>
		</>
	);
}

export default Nav;
