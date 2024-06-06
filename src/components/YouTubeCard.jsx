import React, { forwardRef } from 'react';
import styles from '../styles/YoutubeCard.module.scss';

const YouTubeCard = forwardRef(({ title, description }, ref) => {
  return (
    <div className={styles.card} ref={ref}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
});

export default YouTubeCard;
