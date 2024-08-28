import React, { useState } from 'react';

function CreateEventPage() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle event creation logic
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create New Event</h1>
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
          Create Event
        </button>
      </form>
    </div>
  );
}

export default CreateEventPage;
