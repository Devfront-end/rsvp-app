import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MyEventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // TODO: Fetch user's events from the backend
    const fetchEvents = async () => {
      // Simulated API call
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  return (
    <div className="container mt-5">
      <h2>My Events</h2>
      <Link to="/create-event" className="btn btn-primary mb-3">Create New Event</Link>
      <div className="row">
        {events.map(event => (
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

export default MyEventsPage;