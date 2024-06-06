import React from 'react';
import styles from '../styles/Typography.module.scss';

const Typography = ({ variant, children }) => {
  const Tag = variant;
  return <Tag className={styles[variant]}>{children}</Tag>;
};

export default Typography;
