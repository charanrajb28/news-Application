import React from 'react';
import Headcards from './Headcards';

export default function Sidebar(props) {
  let articles = props.articles;

  return (
    <aside className="col-lg-3 col-md-4">
      <div className="d-flex flex-column align-items-start">
        {articles.map((article, index) => (
          <Headcards key={index} article={article} />
        ))}
      </div>
    </aside>
  );
}

