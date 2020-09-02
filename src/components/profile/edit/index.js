import React, { useState } from 'react';

const ProfileEdit = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`name: ${name}, username: ${username}, bio: ${bio}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={({ target: { value } }) => setUsername(value)}
      />
      <label htmlFor="bio">Bio</label>
      <input
        id="bio"
        type="text"
        value={bio}
        onChange={({ target: { value } }) => setBio(value)}
      />
      <button>Save</button>
    </form>
  );
};

export default ProfileEdit;
