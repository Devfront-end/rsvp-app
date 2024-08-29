import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>{event.date}</p>
    </div>
  );
};

export default EventCard;
