import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditEventPage() {
  const { eventId } = useParams();
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  useEffect(() => {
    // Fetch event data using eventId and populate the state
  }, [eventId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle event update logic
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Edit Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Event Name"
          className="w-full p-2 rounded"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
        <input
          type="date"
          className="w-full p-2 rounded"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />
        <textarea
          placeholder="Event Description"
          className="w-full p-2 rounded"
          rows="5"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Update Event
        </button>
      </form>
    </div>
  );
}

export default EditEventPage;
