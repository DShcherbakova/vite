import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Counter</Link></li>
          <li><Link to="/library">Library</Link></li>
          <li><Link to="/sandwich">Sandwich</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;