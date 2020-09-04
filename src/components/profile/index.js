import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Post = ({ src }) => <img className={styles.post} alt="post" src={src} />;

const Profile = () => {
  const username = 'Dave';
  const postCount = 5;
  const [isFollowed, setIsFollowed] = useState(false);
  const auth = true;

  return (
    <div className={styles.main}>
      <div>
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
      </div>
      {postCount === 0 ? (
        <div>no posts</div>
      ) : (
        <div className={styles.posts}>
          {[...Array(postCount)].map((_, idx) => (
            <Post src="https://via.placeholder.com/300" key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
