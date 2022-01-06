import React from 'react';
import {Link} from 'react-router-dom'
import styles from './navbar.css'

const Navbar = () => {
    return (
        <nav>
           <ul className="navbg">
               <li>
                   <Link to='/'>Pagina inicial</Link>
               </li>
               <li>
                   <Link to='/login'>Login / Criar sua conta</Link>
               </li>

               
            </ul> 
        </nav>

    )
}
export default Navbar