import React from 'react';

const LinkAccount = () => {
  const handleLinkAccount = (platform) => {
    // Redirect to the OAuth authorization URL for the selected platform
    window.location.href = `/auth/${platform}`;
  };

  return (
    <div>
      <h2>Link Social Media Account</h2>
      <button onClick={() => handleLinkAccount('facebook')}>Link Facebook</button>
      <button onClick={() => handleLinkAccount('twitter')}>Link Twitter</button>
      <button onClick={() => handleLinkAccount('instagram')}>Link Instagram</button>
    </div>
  );
};

export default LinkAccount;
