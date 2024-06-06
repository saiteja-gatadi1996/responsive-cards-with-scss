import React from 'react';
import styles from '../styles/ShimmerUI.module.scss';

const ShimmerUI = () => {
  return (
    <div className={styles.shimmerWrapper}>
      <div className={styles.shimmer}></div>
    </div>
  );
};

export default ShimmerUI;
