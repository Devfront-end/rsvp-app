import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchEventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    // TODO: Implement search logic here
    // This is a placeholder for the actual API call
    const response = await fetch(`/api/events/search?term=${searchTerm}`);
    const data = await response.json();
    setSearchResults(data);
  };

  return (
    <div className="container mt-5">
      <h2>Search Events</h2>
      <form onSubmit={handleSearch} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">Search</button>
        </div>
      </form>
      <div className="row">
        {searchResults.map(event => (
          <div key={event.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.description}</p>
                <p className="card-text"><small className="text-muted">{new Date(event.date).toLocaleDateString()}</small></p>
                <Link to={`/event/${event.id}`} className="btn btn-info">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchEventsPage;