import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

interface LayoutParams {
    children: ReactNode;
}

const Layout: React.FC<LayoutParams> = ({ children }) => {
    return (
        <>
            <nav>
                <div className="topnav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </div>
            </nav>
            <main>
                <div className="container">
                    { children }
                </div>
            </main>
        </>
    )
}

export default Layout;