import React from 'react';

const Profile = props => {
  const { username } = props;
  return <h1>Profile of {username}</h1>;
};

Profile.propTypes = {
  username: String
};

export default Profile;
