import React from 'react';

import requests from '../../requests';
import Banner from '../../Components/Banner/Banner';
import Row from '../../Components/Row/Row';

import './Home.css';

const Home = () => {

	return (
		<div className="home">
			<Banner />
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
			<Row title="Popular Movies" fetchUrl={requests.fetchPopular} />
			<Row title="Popular TV Shows" fetchUrl={requests.fetchPopularTV} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			{/* <Row title='Latest Movies' fetchUrl={requests.fetchLatest} /> */}
		</div>
	);
};

export default Home;
