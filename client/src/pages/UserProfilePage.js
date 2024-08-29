import React, { useState, useEffect } from 'react';

const UserProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // TODO: Fetch user data from the backend
    const fetchUserData = async () => {
      // Simulated API call
      const response = await fetch('/api/user/profile');
      const data = await response.json();
      setUser(data);
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement profile update logic
    console.log('Profile update:', user);
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={user.name}
            onChange={(e) => setUser({...user, name: e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
          />
        </div>
        {/* Add more fields as needed */}
        <button type="submit" className="btn btn-primary">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfilePage;