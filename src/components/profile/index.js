import React from 'react';

const Profile = props => <h1>Profile of {props.username}</h1>;

Profile.propTypes = {
  username: String
};

export default Profile;
