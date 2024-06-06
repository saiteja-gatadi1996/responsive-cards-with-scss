import React, { ReactNode } from 'react';
import styles from '../styles/Typography.module.scss';

interface TypographyProps {
  variant: 'h1' | 'p';
  children: ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
  const Tag = variant;
  return <Tag className={styles[variant]}>{children}</Tag>;
};

export default Typography;
