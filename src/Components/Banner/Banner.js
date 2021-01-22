import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from '../../axios';
import requests from '../../requests';
import UserContext from '../../Context';
import './Banner.css';


function Banner() {
	const [movie, setMovie] = useState([]);
	const history = useHistory();
	const { user } = useContext(UserContext);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchPopular);
			const { results } = request.data;
			const randomMovie =
				results[Math.floor(Math.random() * results.length - 1)];
			setMovie(randomMovie);
		}
		fetchData();
	}, []);

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	}

	const handleFavorite = () => {
		if (user) {
			let favorites = [];
			favorites = JSON.parse(localStorage.getItem('favorites')) || [];
			favorites.push(movie);
			localStorage.setItem('favorites', JSON.stringify(favorites));
		} else {
			alert('You must be logged in to favorite a movie');
			history.push('/login');
		}
	};

	return (
		<header
			className="banner"
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundPosition: 'center center',
			}}
		>
			<div className="banner-contents">
				<h1 className="banner-title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>

				<div className="banner-buttons">
					<button className="banner-button" onClick={handleFavorite}>Favorite</button>
					<Link to={`/movie/${movie?.id}`}>
						<button className="banner-button">Details</button>
					</Link>
				</div>

				<h1 className="banner-description">
					{truncate(movie?.overview, 150)}
				</h1>
			</div>
			<div className="fade-bottom" />
		</header>
	);
}

export default Banner;
