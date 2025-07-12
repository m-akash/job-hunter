// @ts-nocheck
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const Root: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto" data-theme="light">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
