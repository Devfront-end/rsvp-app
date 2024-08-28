import React, { useState } from 'react';
import AuthPopup from './components/AuthPopup';

function App() {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('');
  const [comments, setComments] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const guestList = [
    { name: 'Jules', date: 'Feb 21, 2024 9:09 pm', comment: 'Unmistakably !', guests: 1, attending: true },
    { name: 'fred', date: 'Sep 21, 2022 9:56 am', comment: 'Looking forward to it', guests: 3, attending: true },
    { name: 'U3', date: 'Sep 19, 2022 7:55 am', comment: 'Hello', guests: 0, attending: false },
    { name: 'Mike', date: 'Sep 16, 2022 8:49 pm', comment: 'Sorry ! Maybe next...', guests: 0, attending: false },
  ];

  const closePopups = () => {
    setShowSignup(false);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true); // Show the login popup
  };

  return (
    <div className="min-h-screen bg-blue-500">
      <header className="bg-purple-700 p-4 flex justify-between items-center">
        <img src="/fiesta.jpg" alt="Event" className="h-8" />
        <div>
          <button 
            onClick={() => setShowSignup(true)} 
            className="bg-blue-600 text-white px-4 py-2 rounded mr-2">
            Sign up
          </button>
          <button 
            onClick={handleLoginClick} 
            className="bg-blue-800 text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
      </header>
      
      <main className="container mx-auto mt-8 p-6 bg-blue-600 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0 pl-4 md:pl-0">
            <h2 className="text-2xl font-bold text-white mb-4">RSVP Here</h2>
            <p className="text-white mb-4">Let us know if you can make it</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-2 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <select 
                className="w-full p-2 rounded"
                value={attending}
                onChange={(e) => setAttending(e.target.value)}
              >
                <option value="">Can you attend?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <textarea 
                placeholder="Comments" 
                className="w-full p-2 rounded"
                rows="4"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              ></textarea>
              <button 
                type="button" 
                className="bg-blue-800 text-white px-4 py-2 rounded w-full"
                onClick={handleLoginClick} // Call the function that handles the login popup
              >
                Please log in to RSVP
              </button>
            </form>
          </div>
          
          <div className="w-full md:w-1/2 pl-4 bg-cyan-300 rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Guest list</h2>
            <p className="mb-4">Currently {guestList.filter(guest => guest.attending).reduce((sum, guest) => sum + guest.guests, 0)} guests are expected</p>
            {guestList.map((guest, index) => (
              <div key={index} className="flex justify-between items-start mb-4 border-b pb-2">
                <div>
                  <p className="font-bold">{guest.name}</p>
                  <p className="text-sm">{guest.date}</p>
                </div>
                <div className="text-right">
                  <p>{guest.comment}</p>
                  <p>{guest.guests} {guest.guests === 1 ? 'guest' : 'guests'}</p>
                </div>
                {guest.attending ? 
                  <span className="text-green-500 ml-2">✓</span> : 
                  <span className="text-red-500 ml-2">✗</span>
                }
                            </div>
            ))}
          </div>
        </div>
      </main>

      {/* Render the AuthPopup component conditionally based on state */}
      {showSignup || showLogin ? (
        <AuthPopup 
          showSignup={showSignup} 
          showLogin={showLogin} 
          closePopups={closePopups} 
          setShowSignup={setShowSignup} 
          setShowLogin={setShowLogin}
        />
      ) : null}
    </div>
  );
}

export default App;

