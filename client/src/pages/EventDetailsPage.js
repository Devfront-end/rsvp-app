import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EventDetailsPage() {
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    // Fetch event details using eventId
  }, [eventId]);

  if (!eventDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{eventDetails.name}</h1>
      <p className="mb-4">Date: {eventDetails.date}</p>
      <p className="mb-6">{eventDetails.description}</p>
      {/* Add more details and actions here */}
    </div>
  );
}

export default EventDetailsPage;
