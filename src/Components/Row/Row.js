import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';
import './Row.css';

const imgBaseUrl = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	let history = useHistory();

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			const { results } = request.data;
			setMovies(results);
		}

		fetchData();
	}, [fetchUrl]);


	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row-posters">
				{movies.map((movie, index) => {
					return (
						<img
							onClick={() => history.push(`/movie/${movie.id}`)}
							key={movie.id}
							className={`row-poster ${
								isLargeRow && 'row-poster-large'
							}`}
							src={`${imgBaseUrl}${
								isLargeRow
									? movie.poster_path
									: movie.backdrop_path
							}`}
							alt={movie.title}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Row;
