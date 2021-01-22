import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './MovieDetail.css';
import axios from '../../axios';
import apiKey from '../../config';
import UserContext from '../../Context';

const MovieDetail = () => {
	let { id } = useParams();

	const [movie, setMovie] = useState({});
    const [credits, setCredits] = useState([]);
    const { user } = useContext(UserContext);
    const history = useHistory();
    // const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(
				`/movie/${id}?api_key=${apiKey}&language=en-US`
			);
			const results = request.data;
			setMovie(results);
			console.log(request.data);
		}
		fetchData();
	}, [id]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(
				`/movie/${id}/credits?api_key=${apiKey}&language=en-US`
			);
			const results = request.data;
			setCredits(results.cast.slice(0, 3));
			console.log(request.data);
		}
		fetchData();
    }, [id]);
    
    const handleFavorite = () => {
        if (user) {
            let favorites = [];
            favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            favorites.push(movie)
            localStorage.setItem('favorites', JSON.stringify(favorites));
        } else {
            alert('You must be logged in to favorite a movie')
            history.push('/login')
        }
    }

	return (
		<div className="overlay">
			<div
				className="detail"
				style={{
					backgroundSize: 'cover',
					backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
					backgroundPosition: 'center center',
				}}
			>
				<div className="detail-contents">
					<h2 className="detail-title">
						{movie?.title || movie?.name || movie?.original_name}
					</h2>
					<h2 className="detail-description">{movie?.overview}</h2>
					<button className="detail-fav-btn" onClick={handleFavorite}>
						Favorite This Movie
					</button>
					<h2 className="detail-cast-title">Starring:</h2>
					{credits &&
						credits?.map((actor, index) => {
							return (
								<p className="detail-cast">
									{actor.name} as {actor.character}
								</p>
							);
						})}
					<h2 className="detail-facts-title">Fun Facts:</h2>
					<p className="detail-facts">Budget: ${movie?.budget}</p>
					<p className="detail-facts">
						Genres:
						{movie?.genres?.map((genre, index) => {
							return ` ${genre.name}, `;
						})}
					</p>
					<p className="detail-facts">
						See more <a href={movie?.homepage}>here</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default MovieDetail;
