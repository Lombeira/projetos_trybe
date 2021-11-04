import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  addNewMovie = (newMovie) => {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  onSearchTextChange = ({ target: { value } }) => {
    const { searchText, movies } = this.state;

    this.setState({
      searchText: value,
      movies: movies.filter((movie) => movie.title.toLowerCase().includes(searchText)
        || movie.subtitle.toLowerCase().includes(searchText)
        || movie.storyline.toLowerCase().includes(searchText)),
    });
  }

  onBookmarkedChange = ({ target: { checked } }) => {
    const { movies } = this.state;

    this.setState({
      bookmarkedOnly: checked,
      movies: movies.filter(({ bookmarked }) => bookmarked === checked),
    });
  }

  onSelectedGenreChange = ({ target: { value } }) => {
    const { movies } = this.state;

    this.setState({
      selectedGenre: value,
      movies: movies.filter(({ genre }) => genre === value),
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieLibrary;
