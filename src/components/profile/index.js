import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Post = ({ src }) => <img className={styles.post} alt="post" src={src} />;

const Profile = () => {
  const username = 'dave';
  const postCount = 5;
  const [isFollowed, setIsFollowed] = useState(false);
  const auth = true;

  return (
    <div className={styles.center}>
      <div className={styles.main}>
        <div className={styles.profile}>
          <div className={styles.center}>
            <img
              className={styles.profilePictureImg}
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </div>
          <div>
            <h1>@{username}</h1>
            <div className={styles.countsRow}>
              <h2>{postCount} Posts</h2>
              <h2>0 Following</h2>
              <h2>0 Followers</h2>
            </div>
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
    </div>
  );
};

export default Profile;
