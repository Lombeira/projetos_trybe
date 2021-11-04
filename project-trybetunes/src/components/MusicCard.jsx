import React from 'react';
import PropTypes from 'prop-types';
import {
  addSong,
  removeSong,
  getFavoriteSongs,
} from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      favorite: [],
    };
  }

  componentDidMount() {
    this.getFavoriteSongs();
  }

  handleChange = ({ target }) => {
    const { music, onChange } = this.props;
    this.setState({
      loading: true,
    });
    if (target.checked) {
      addSong(music).then(() => {
        this.setState({ loading: false });
      });
    } else {
      removeSong(music).then(() => {
        this.setState({ loading: false });
      });
    }
    this.getFavoriteSongs();
    onChange();
  };

  getFavoriteSongs = () => {
    getFavoriteSongs().then((songs) => {
      this.setState({ favorite: songs });
    });
  };

  selectFavoriteSongs(trackId, favorite) {
    return (
      <label htmlFor={ trackId }>
        Favorita
        <input
          id={ trackId }
          type="checkbox"
          name="favorite"
          data-testid={ `checkbox-music-${trackId}` }
          onChange={ this.handleChange }
          checked={ favorite.some((song) => song.trackId === trackId) }
        />
      </label>
    );
  }

  render() {
    const {
      music: { trackName, previewUrl, trackId },
    } = this.props;
    const { loading, favorite } = this.state;

    return (
      <section>
        <span>{trackName}</span>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        {loading ? <Loading /> : this.selectFavoriteSongs(trackId, favorite)}
      </section>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
  }).isRequired,
  onChange: PropTypes.func,
};

MusicCard.defaultProps = {
  onChange: () => {},
};

export default MusicCard;
