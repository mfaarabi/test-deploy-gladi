import React from 'react';

const Profile = () => {
  const username = 'Dave';
  const postCount = 0;

  return (
    <>
      <h1>Profile of {username}</h1>
      <h2>{postCount} Posts</h2>
    </>
  );
};

export default Profile;
