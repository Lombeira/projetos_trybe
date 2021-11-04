import React from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      musics: [],
      loading: true,
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    getMusics(id).then((musics) => this.setState({ musics, loading: false }));
  }

  render() {
    const { loading, musics } = this.state;
    if (musics.length > 0) {
      const { artworkUrl100, collectionName, artistName } = musics[0];
      return (
        <div data-testid="page-album">
          <section>
            <img src={ artworkUrl100 } alt={ collectionName } />
            <h2 data-testid="artist-name">{artistName}</h2>
            <h3 data-testid="album-name">{collectionName}</h3>
          </section>
          {loading ? (
            <Loading />
          ) : (
            musics
              .slice(1)
              .map((music, index) => (
                <MusicCard key={ `${music.trackId}-${index}` } music={ music } />
              ))
          )}
        </div>
      );
    }
    return <div data-testid="page-album" />;
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
