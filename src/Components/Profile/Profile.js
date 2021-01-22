import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Context';
import './Profile.css';
import '../Row/Row.css';

const imgBaseUrl = 'https://image.tmdb.org/t/p/original/';

const Profile = () => {
	const [favorites, setFavorites] = useState([]);
	const { user } = useContext(UserContext);
	const history = useHistory();

	useEffect(() => {
		function fetchData() {
			const results = JSON.parse(localStorage.getItem('favorites'));
			setFavorites(results);
		}
		fetchData();
	}, []);

	return (
		<div className="profile">
			<h1 className="profile-title">My Profile</h1>
			{/* <h2 className="profile-name">Name: {user?.name}</h2> */}
			<h2 className="profile-email">Email: {user?.email}</h2>
			<h2 className="profile-favorites">Favorites:</h2>
			{/* <Row title="Favorite Titles" isLargeRow /> */}
			<div className="row">
				<div className="row-posters">
					{favorites.map((movie, index) => {
						return (
							<img
								onClick={() =>
									history.push(`/movie/${movie.id}`)
								}
								key={index}
								className="row-poster row-poster-large"
								src={`${imgBaseUrl}${movie.poster_path}`}
								alt={movie.title}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Profile;
