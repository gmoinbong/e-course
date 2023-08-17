import { Header } from '@components/Header';
import Navigation from '@components/Navigation';
import { SearchBar } from '@components/Header/SearchBar';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div style={{ display: 'flex', paddingTop: '32px' }}>
      <Navigation />
      <div style={{ width: "100%" }} >
        <Header />
        {children}</div>
    </div>
  );
}
