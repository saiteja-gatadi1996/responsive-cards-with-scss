import React, { forwardRef } from 'react';
import styles from '../styles/YoutubeCard.module.scss';

interface YouTubeCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const YouTubeCard = forwardRef<HTMLDivElement, YouTubeCardProps>(
  ({ title, description, imageUrl }, ref) => {
    return (
      <div className={styles.card} ref={ref}>
        <img src={imageUrl} alt={title} className={styles.image} />
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
);

export default YouTubeCard;
