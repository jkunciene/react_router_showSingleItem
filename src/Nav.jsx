import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse">
                 <ul className="navbar-nav mr-auto">
                     <Link to='/about'>
                    <li className="nav-link ">
                       About
                    </li>
                    </Link>
                    <Link to='/first'>
                    <li className="nav-link ">
                       First
                    </li>
                    </Link>
                    </ul>
            </div>
        </div>
    )
}

export default Nav
