import React from 'react';

const Profile = ({ username }) => <h1>Profile of {username}</h1>;

Profile.propTypes = {
  username: String
};

export default Profile;
