import React, { forwardRef } from 'react';
import styles from '../styles/YoutubeCard.module.scss';
import { YouTubeCardProps } from '../utils/interfaces';

const YouTubeCard = forwardRef<HTMLDivElement, YouTubeCardProps>(
  ({ title, description }, ref) => {
    return (
      <div className={styles.card} ref={ref}>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
);

export default YouTubeCard;
