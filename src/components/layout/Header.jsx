import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="header__toggle"
            aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isSidebarOpen}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="header__title">Admin Dashboard</h1>
        </div>
        <div className="header__user">
          <span>John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;