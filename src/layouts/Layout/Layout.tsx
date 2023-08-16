import Navigation from '@components/Navigation';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div style={{ display: 'flex', paddingTop: '32px' }}>
      <Navigation />
      <div >{children}</div>
    </div>
  );
}
