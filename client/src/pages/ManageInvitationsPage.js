import React, { useState, useEffect } from 'react';

const ManageInvitationsPage = () => {
  const [invitations, setInvitations] = useState([]);

  useEffect(() => {
    // TODO: Fetch invitations from the backend
    const fetchInvitations = async () => {
      // Simulated API call
      const response = await fetch('/api/invitations');
      const data = await response.json();
      setInvitations(data);
    };

    fetchInvitations();
  }, []);

  const handleResponseChange = async (invitationId, response) => {
    // TODO: Implement invitation response logic
    console.log('Invitation response:', invitationId, response);
    // Update the invitation in the state
    setInvitations(invitations.map(inv => 
      inv.id === invitationId ? {...inv, userResponse: response} : inv
    ));
  };

  return (
    <div className="container mt-5">
      <h2>Manage Invitations</h2>
      <div className="list-group">
        {invitations.map(invitation => (
          <div key={invitation.id} className="list-group-item">
            <h5 className="mb-1">{invitation.eventTitle}</h5>
            <p className="mb-1">Date: {new Date(invitation.eventDate).toLocaleDateString()}</p>
            <p className="mb-1">From: {invitation.inviterName}</p>
            <div className="btn-group" role="group">
              <button 
                type="button" 
                className={`btn btn-outline-success ${invitation.userResponse === 'yes' ? 'active' : ''}`}
                onClick={() => handleResponseChange(invitation.id, 'yes')}
              >
                Yes
              </button>
              <button 
                type="button" 
                className={`btn btn-outline-danger ${invitation.userResponse === 'no' ? 'active' : ''}`}
                onClick={() => handleResponseChange(invitation.id, 'no')}
              >
                No
              </button>
              <button 
                type="button" 
                className={`btn btn-outline-secondary ${invitation.userResponse === 'maybe' ? 'active' : ''}`}
                onClick={() => handleResponseChange(invitation.id, 'maybe')}
              >
                Maybe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageInvitationsPage;