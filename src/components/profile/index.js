import React from 'react';

const Profile = ({ username, postCount }) => (
  <>
    <h1>Profile of {username}</h1>
    <h2>{postCount} Posts</h2>
  </>
);

Profile.propTypes = {
  username: String.required,
  postCount: Number
};

Profile.defaultProps = {
  postCount: 0
};

export default Profile;
