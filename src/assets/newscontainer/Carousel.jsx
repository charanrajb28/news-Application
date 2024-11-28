import React from 'react';

const Carousel = ({ articles }) => {
  const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
  };

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{margin: '20px'}}>
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {articles.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img
              src={article.urlToImage || 'https://via.placeholder.com/800x400'}
              className="d-block w-100"
              alt={article.title || 'News Image'}
              style={imageStyle} // Apply the image styling here
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{article.title || 'No Title Available'}</h5>
              <p>{article.description || 'No description available.'}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
