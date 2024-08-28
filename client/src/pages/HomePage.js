import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [name, setName] = useState('');
  const [canAttend, setCanAttend] = useState('');
  const [comments, setComments] = useState('');

  const guestList = [
    { name: 'Jules', date: 'Feb 21, 2024 9:09 pm', comment: 'Unmistakably !', guests: 1, attending: true },
    { name: 'fred', date: 'Sep 21, 2022 9:56 am', comment: 'Looking forward to it', guests: 3, attending: true },
    { name: 'U3', date: 'Sep 19, 2022 7:55 am', comment: 'Hello', guests: 0, attending: false },
    { name: 'Mike', date: 'Sep 16, 2022 8:49 pm', comment: 'Sorry ! Maybe next...', guests: 0, attending: false },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle RSVP submission logic here
    console.log('RSVP submitted:', { name, canAttend, comments });
  };

  return (
    <div className="min-h-screen bg-blue-500">
      <header className="bg-purple-700 p-4 flex justify-between items-center">
        <img src="/path-to-your-image.jpg" alt="Event" className="w-16 h-16" />
        <div>
          <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded mr-2">Sign up</Link>
          <Link to="/login" className="bg-blue-800 text-white px-4 py-2 rounded">Login</Link>
        </div>
      </header>
      
      <main className="container mx-auto mt-8 flex">
        <div className="w-1/2 bg-blue-600 p-6 rounded-l-lg">
          <h2 className="text-2xl font-bold text-white mb-4">RSVP Here</h2>
          <p className="text-white mb-4">Let us know if ou can make it</p>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Nom" 
              className="w-full p-2 mb-4 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <select 
              className="w-full p-2 mb-4 rounded"
              value={canAttend}
              onChange={(e) => setCanAttend(e.target.value)}
            >
              <option value="">Can you attend ?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <textarea 
              placeholder="Comments" 
              className="w-full p-2 mb-4 rounded"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
            <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded">Please log in</button>
          </form>
        </div>
        
        <div className="w-1/2 bg-cyan-300 p-6 rounded-r-lg">
          <h2 className="text-2xl font-bold mb-4">Guest list</h2>
          <p className="mb-4">Currently {guestList.filter(guest => guest.attending).reduce((sum, guest) => sum + guest.guests, 0)} guests are expected</p>
          {guestList.map((guest, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <div>
                <p className="font-bold">{guest.name}</p>
                <p className="text-sm">{guest.date}</p>
              </div>
              <div>
                <p>{guest.comment}</p>
                <p>{guest.guests} {guest.guests === 1 ? 'guest' : 'guests'}</p>
              </div>
              {guest.attending ? 
                <span className="text-green-500">✓</span> : 
                <span className="text-red-500">✗</span>
              }
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;