import React from 'react';

export default function CategoryBar({ categories, onSelectCategory }) {
  return (
    <div className="category-bar my-3">
      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category}
            className="category-item"
            onClick={() => onSelectCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
}
