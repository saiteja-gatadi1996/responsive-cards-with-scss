import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface TypographyProps {
  variant: 'h1' | 'p';
  children: ReactNode;
}

export interface YouTubeCardProps {
  title: string;
  description: string;
}
