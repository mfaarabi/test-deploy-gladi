import React, { useState } from 'react';

const Profile = () => {
  const username = 'Dave';
  const postCount = 0;
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <>
      <h1>Profile of {username}</h1>
      <h2>{postCount} Posts</h2>
      <button
        onClick={() => {
          setIsFollowed(!isFollowed);
        }}
      >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </button>
    </>
  );
};

export default Profile;
