import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Album extends Component {
	state = {
		loading: true,
		error: null,
		album: null
	};

	componentDidMount() {
		this.loadAlbum();
	}

	loadAlbum = () => {
		this.setState({
			loading: true,
			error: null
		});
		/* https://react-api-lab.herokuapp.com/albums/83d91898-7763-47d7-b03b-b92132375c47 */
		fetch(`https://react-api-lab.herokuapp.com/albums/${this.props.match.params.albumId}`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					loading: false,
					album: data.data
				});
			})
			.catch((error) => {
				this.setState({
					loading: false,
					error: error
				});
			});
	};
	render() {
		const { loading, album, error } = this.state;
		return (
			<div className="albumInfo">
				{loading && 'loading music...'}
				{album && (
					<React.Fragment>
						<img src={album.imageUrl} />
						<p>{album.name}</p>
						<p>Tracks:</p>
						{album.tracks.map((track) => {
							return <div>{track.name}</div>;
						})}
					</React.Fragment>
				)}
			</div>
		);
	}
}

export default Album;
