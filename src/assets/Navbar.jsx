import React, { useState, useEffect } from 'react';

export default function Navbar(props) {
  const [inputchar, UpdateInput] = useState("");

  // This effect ensures that the input field reflects the search query passed as a prop
  useEffect(() => {
    UpdateInput(props.searchQuery || ""); // Update input state with the search query from props
  }, [props.searchQuery]); // Run this effect when the searchQuery prop changes

  const search = () => {
    props.search(inputchar); // Pass the updated input value to the parent component
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ width: "100%", padding: "10px 20px" }}>
        <div className="d-flex justify-content-between w-100">
          {/* Navbar on the left */}
          <a className="navbar-brand" href="/">News Application</a>

          {/* Search bar and button on the right */}
          <div className="d-flex align-items-center">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search"
              value={inputchar} // Set the input value to the current state of inputchar
              onChange={(e) => UpdateInput(e.target.value)} // Update the input state as the user types
              style={{ width: "200px" }} // Optional: Set width for the search input
            />
            <button className="btn btn-outline-success ms-2" type="submit" onClick={search}>Search</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
