import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const artists = [
	{
		id: '83d91898-7763-47d7-b03b-b92132375c47',
		name: 'Pink Floyd',
		imageUrl: 'https://lastfm-img2.akamaized.net/i/u/300x300/98d2ca11cd6642519d750f4b82fbec2c.png'
	},
	{
		id: '8bfac288-ccc5-448d-9573-c33ea2aa5c30',
		name: 'Red Hot Chili Peppers',
		imageUrl: 'https://lastfm-img2.akamaized.net/i/u/300x300/ff9c5cb557a7489f8ef032b993638d18.png'
	}
];

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				{artists.map((artist) => (
					<Link key={artist.key} to={`/artists/${artist.id}`}>
						<div className="row mb-4">
							<div className="col-4">
								<img className={'img-fluid'} src={artist.imageUrl} />
							</div>
							<div className="col-8">
								<h1> {artist.name} </h1>
							</div>
						</div>
					</Link>
				))}
			</React.Fragment>
		);
	}
}
