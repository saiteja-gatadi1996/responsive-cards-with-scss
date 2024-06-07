import React from 'react';
import styles from '../styles/Layout.module.scss';
import { LayoutProps } from '../utils/interfaces';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
