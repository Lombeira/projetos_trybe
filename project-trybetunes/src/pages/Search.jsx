import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      artistNameReq: '',
      loading: false,
      isData: false,
      albums: [],
    };
  }

  handleChange = ({ target: { value } }) => this.setState({
    artistName: value,
    artistNameReq: value,
  });

  handleSearch = () => {
    const { artistNameReq } = this.state;
    this.setState({ artistName: '', loading: true });
    searchAlbumsAPI(artistNameReq).then((data) => {
      this.setState({
        isData: true,
        loading: false,
        albums: data,
      });
    });
  };

  render() {
    const { artistNameReq, artistName, loading, isData, albums } = this.state;
    const MINIMUM_ARTIST_NAME_LENGTH = 2;
    if (loading) {
      <div>
        <Loading />
      </div>;
    }
    return (
      <div data-testid="page-search">
        <form>
          <input
            data-testid="search-artist-input"
            type="text"
            value={ artistName }
            onChange={ this.handleChange }
            placeholder="Nome do artista"
          />
          <button
            data-testid="search-artist-button"
            type="button"
            disabled={ artistName.length < MINIMUM_ARTIST_NAME_LENGTH }
            onClick={ this.handleSearch }
          >
            Pesquisar
          </button>
        </form>
        {isData ? (
          <div>
            <p>
              Resultado de álbuns de:
              {' '}
              {artistNameReq}
            </p>
            {albums.length === 0 ? (
              <p>Nenhum álbum foi encontrado</p>
            ) : (
              <ul>
                {albums.map(({ collectionName, collectionId }) => (
                  <li key={ collectionId }>
                    <Link
                      data-testid={ `link-to-album-${collectionId}` }
                      to={ `/album/${collectionId}` }
                    >
                      {collectionName}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div>{loading ? <Loading /> : ''}</div>
        )}
      </div>
    );
  }
}
export default Search;
