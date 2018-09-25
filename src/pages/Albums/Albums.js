import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Albums extends Component {
  state = {
    laoding: true,
    error: null,
    album: null
  };
  constructor() {
    super();
    console.log("1 Album constructor");
  }

  componentDidMount() {
    this.loadAlbums();
    console.log("3. Album did mount");
  }

  componentDidUpdate(prevprops) {
    console.log("4 Album did update");
    if (this.props.match.params.albumsId !== prevprops.match.params.albumsId) {
      this.loadAlbums();
    }
  }

  componentWillUnmount() {
    console.log("5 Album will unmount");
  }

  loadAlbums = () => {
    console.log("Loading Albums");
    this.setState({
      loading: true,
      error: null
    });

    fetch(
      `https://react-api-lab.herokuapp.com/albums/${
        this.props.match.params.albumsId
      }`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          album: data.data
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
    console.log("2 Album render");
    const { loading, album, error } = this.state;
    if (loading) {
      return (
        <div>
          <p>Loading Albums...</p>
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
        <h1>{album.name}</h1>
        {album.albums.map(album => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.name}</Link>
          </li>
        ))}
      </div>
    );
  }
}
