import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImagePath;
