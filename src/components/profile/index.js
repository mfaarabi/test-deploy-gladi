import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Post = ({ src }) => (
  <img style={{ width: '300px', height: '300px' }} alt="post" src={src} />
);

const Profile = () => {
  const username = 'Dave';
  const postCount = 5;
  const [isFollowed, setIsFollowed] = useState(false);
  const auth = true;

  return (
    <>
      <h1>Profile of {username}</h1>
      <h2>{postCount} Posts</h2>
      {auth ? (
        <Link to="/profile/edit">Edit Profile</Link>
      ) : (
        <button
          onClick={() => {
            setIsFollowed(!isFollowed);
          }}
        >
          {isFollowed ? 'Unfollow' : 'Follow'}
        </button>
      )}
      {postCount === 0 ? (
        <div>no posts</div>
      ) : (
        <>
          <br />
          {[...Array(postCount)].map((_, idx) => (
            <Post src="https://via.placeholder.com/300" key={idx} />
          ))}
        </>
      )}
    </>
  );
};

export default Profile;
