import React, { ReactNode } from 'react';
import styles from '../styles/Typography.module.scss';
import { TypographyProps } from '../utils/interfaces';

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
  const Tag = variant;
  return <Tag className={styles[variant]}>{children}</Tag>;
};

export default Typography;
