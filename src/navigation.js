import React from 'react';
import {Link} from 'react-router-dom';

export default function Navigation() {

 const navStyle = {
     color: 'white',
     fontFamily: 'Roboto'
 }
    return(
        <nav>
             <ul className='nav-links'>
                <Link style= {navStyle} to = '/'><li>Home</li></Link>
                <Link style= {navStyle} to = '/ComponentOne'><li>Component 1</li></Link>
                <Link style= {navStyle} to = '/ComponentTwo'><li>Component 2</li></Link>
                <Link style= {navStyle} to = '/ComponentThree'><li>Component 3</li></Link>
            </ul>
        </nav>
    )
}