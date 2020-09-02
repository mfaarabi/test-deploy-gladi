import React from 'react';

const ProfileEdit = () => (
  <>
    <label htmlFor="name">Name</label>
    <input id="name" type="text" />
    <label htmlFor="username">Username</label>
    <input id="username" type="text" />
    <label htmlFor="bio">Bio</label>
    <input id="bio" type="text" />
    <button>Save</button>
  </>
);

export default ProfileEdit;
