import React, { Component } from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorite: [],
    };
  }

  componentDidMount() {
    this.getFavoriteList();
  }

  getFavoriteList = () => {
    getFavoriteSongs().then((favorite) => this.setState({ favorite }));
  }

  render() {
    const { favorite } = this.state;
    return (
      <div data-testid="page-favorites">
        {favorite.map((song) => (
          <MusicCard
            key={ song.trackId }
            music={ song }
            onChange={ this.getFavoriteList }
          />
        ))}
      </div>
    );
  }
}

export default Favorites;
