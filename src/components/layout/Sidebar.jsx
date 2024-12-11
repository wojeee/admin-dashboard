import React from 'react';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside className={`sidebar ${isSidebarOpen ? 'sidebar--open' : ''}`}>
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li>
            <a href="#" className="sidebar__link">
              Dashboard
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;