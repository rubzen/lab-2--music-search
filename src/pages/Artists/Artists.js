import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Artists extends Component {
  state = {
    loading: true,
    error: null,
    artist: null
  };
  constructor() {
    super();
    console.log("1 Artist constructor");
  }

  componentDidMount() {
    this.loadArtist();
    console.log("3 Artist did mount");
  }

  componentDidUpdate(prevProps) {
    console.log("4 Artist did update");
    if (this.props.match.params.artistId !== prevProps.match.params.artistId) {
      this.loadArtist();
    }
  }

  componentWillUnmount() {
    console.log("5 Artist will unmount");
  }

  loadArtist = () => {
    console.log("Loading Artist");
    this.setState({
      loading: true,
      error: null
    });

    fetch(
      `https://react-api-lab.herokuapp.com/artists/${
        this.props.match.params.artistId
      }`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          artist: data.data
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        });
      });
  };
  render() {
    console.log("2 Artist render");
    const { loading, artist, error } = this.state;
    if (loading) {
      return (
        <div>
          <p>Loading Artist...</p>
        </div>
      );
    }
    if (error)
      return (
        <div>
          <p>{error.message}</p>
        </div>
      );

    return (
      <div>
        <h1>{artist.name}</h1>
        {artist.albums.map(album => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.name}</Link>
          </li>
        ))}
      </div>
    );
  }
}
