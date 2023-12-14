import React from 'react';
import { useMediaQuery } from 'react-responsive';
import UpperNav from './UpperNav';
import BottomNav from './BottomNav';
import SideNav from './SideNav';


const Layout = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div style={{ flexDirection: 'column', minHeight: '100vh' }}>
      {isMobile && <UpperNav />}
      {!isMobile && <SideNav />}
      <div>{children}</div>
      {isMobile && <BottomNav />}
    </div>
  );
};

export default Layout;
