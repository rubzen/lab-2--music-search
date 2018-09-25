import React, { Component } from "react";
import { Link } from "react-router-dom";

const artists = [
  {
    id: "83d91898-7763-47d7-b03b-b92132375c47",
    name: "Pink Floyd",
    imageUrl:
      "https://lastfm-img2.akamaized.net/i/u/300x300/98d2ca11cd6642519d750f4b82fbec2c.png"
  },
  {
    id: "8bfac288-ccc5-448d-9573-c33ea2aa5c30",
    name: "Red Hot Chili Peppers",
    imageUrl:
      "https://lastfm-img2.akamaized.net/i/u/300x300/ff9c5cb557a7489f8ef032b993638d18.png"
  }
];

export default class Home extends Component {
  render() {
    return (
      <div className="row mb-4">
        <ul>
          {artists.map(artist => (
            <div className="row mb-4" key={artist.id}>
              <img src={artist.imageUrl} alt="Imagen Banda" />
              <div className="col-4">
                <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
