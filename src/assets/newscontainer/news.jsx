import React from 'react';

const NewsBar = ({ article }) => {
  return (
    <a href={article.url || '#'} target="_blank" rel="noopener noreferrer" style={styles.link}>
      <div className="news-bar" style={styles.container}>
        <img
          src={article.urlToImage || 'https://via.placeholder.com/50x50'}
          alt={article.title || 'News Image'}
          style={styles.image}
        />
        <div style={styles.textContainer}>
          <h5 style={styles.title}>{article.title || 'No Title Available'}</h5>
          <p style={styles.description}>{article.description || 'No description available.'}</p>
        </div>
      </div>
    </a>
  );
};

// Updated and polished styles
const styles = {
  link: {
    textDecoration: 'none', // Remove underline from the link
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '15px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  image: {
    width: '60px',
    height: '60px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginRight: '15px',
    border: '2px solid #ddd',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    margin: '0 0 5px 0',
    transition: 'color 0.3s ease',
  },
  description: {
    fontSize: '14px',
    color: '#777',
    margin: 0,
    lineHeight: '1.4',
  },
};

export default NewsBar;
