import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './assets/Navbar';
import Headlines from './assets/top headlines/headlines';
import Carousel from './assets/newscontainer/Carousel';
import CategoryBar from './assets/catrgory/CategoryBar'; // Import the new component
import axios from 'axios';

function App() {
  const [topic, setTopic] = useState(""); // User-selected topic/category
  const [searchQuery, setSearchQuery] = useState(""); // User search query
  const [topArticles, setTopArticles] = useState([]); // Stores top headlines for all categories
  const [topicArticles, setTopicArticles] = useState([]); // Stores articles for the selected topic
  const [newsBarArticles, setNewsBarArticles] = useState([]); // Stores articles for the search query in the NewsBar
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const API_KEY = "24ab6e1807cd45fb919ac5193f2aef32";

  // Available categories
  const categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];

  // Fetch top headlines for all categories (sidebar)
  useEffect(() => {
    const fetchTopHeadlines = async () => {
      setLoading(true);
      setError(''); // Reset error before fetching

      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&page=1&pageSize=6&apiKey=${API_KEY}`
        );
        setTopArticles(response.data.articles); // Set top headlines for the sidebar
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError('Error fetching top headlines');
        setLoading(false);
      }
    };

    fetchTopHeadlines();
  }, []); // Fetch top headlines only once

  // Fetch articles based on the search query (for NewsBar)
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchQuery) return; // Don't fetch if there's no search query

      setLoading(true);
      setError('');

      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=8&apiKey=${API_KEY}`
        );
        setNewsBarArticles(response.data.articles); // Set articles for the search query in the news bar
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError('Error fetching search results');
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery]); // Fetch search results when searchQuery changes

  // Fetch articles for the selected topic (carousel)
  useEffect(() => {
    if (searchQuery) return; // Skip fetching topic articles if a search query is present

    const fetchTopicArticles = async () => {
      setLoading(true);
      setError('');

      try {
        const currentTopic = topic || "sports"; // Default to 'sports' if no topic is selected
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${currentTopic}&page=1&pageSize=8&apiKey=${API_KEY}`
        );
        setTopicArticles(response.data.articles); // Set articles for the selected or default topic
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError('Error fetching topic-specific news');
        setLoading(false);
      }
    };

    fetchTopicArticles();
  }, [topic, searchQuery]); // Fetch articles when `topic` or `searchQuery` changes

  if (error) return <h2 align="center">{error}</h2>;

  return (
    <>
      <Navbar search={setSearchQuery} />
      <div className="row mt-2">
        {/* Horizontal Sidebar on the Left */}
        <div className="col-2">
          <div
            className="rounded-3 border border-secondary p-4"
            style={{
              minHeight: '70vh', // Limit sidebar height
              overflowY: 'auto', // Enable vertical scrolling
            }}
          >
            <CategoryBar categories={categories} onSelectCategory={setTopic} />
          </div>
        </div>

        {/* Main Content (Reduced to col-6) */}
        <div className="col-lg-6 col-md-7">
          <>
            <div className="scroll-container">
              {/* Carousel will now always show articles for the selected category */}
              <Carousel articles={topicArticles} />
              {/* News Bar below the carousel */}
              <div className="news-bar">
                {newsBarArticles.map((article, index) => (
                  <div
                    key={index}
                    className="news-bar-item"
                    onClick={() => window.open(article.url, '_blank')} // Open the article in a new tab
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src={article.urlToImage || 'https://via.placeholder.com/80x60'}
                      alt={article.title || 'News Image'}
                    />
                    <div>
                      <h6>{article.title}</h6>
                      <p>{article.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        </div>

        {/* Sidebar for Top Headlines (Right, col-lg-4 col-md-5) */}
        <div className="col-lg-4 col-md-5">
          <div
            className="rounded-3 border border-secondary p-4 headlines"
            style={{
              maxHeight: '90vh', // Limit sidebar height
              overflowY: 'auto', // Enable vertical scrolling
            }}
          >
            <div
              className="text-center py-2 mb-2"
              style={{
                backgroundColor: 'maroon',
                color: 'white',
                width: '100%',
                margin: 0,
              }}
            >
              Trending Headlines
              {searchQuery}
            </div>
            <Headlines articles={topArticles} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
