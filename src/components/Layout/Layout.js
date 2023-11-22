import React from 'react';
import UpperNav from './UpperNav';
import BottomNav from './BottomNav';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <UpperNav />
      <div style={{ flex: 1 }}>{children}</div>
      <BottomNav />
    </div>
  );
};

export default Layout;
