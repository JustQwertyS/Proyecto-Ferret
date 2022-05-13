import React from 'react'
import { Link } from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

export default function Navbar() {
    const [user] = useAuthState(auth);
  
  return (
    <div className='fixed-top border' style={{backgroundColor:"whitesmoke"}}>
        <nav className='navbar d-flex justify-content-between'>
            <div>
            <Link className='nav-link' to="/"><img src="icon.png" alt="logo" height={40} width={50} className="ms-5"/></Link> 
            </div>
            <Link className='nav-link' to="/">Home </Link>
            <Link className='nav-link' to="/">Tienda </Link>
            <div>
                {
                    user &&(
                        <> 
                        <span className='pe-4'>
                        Conectado como: {user.displayName || user.email}
                        </span>
                        <button className='btn btn-primary btn-sm me-3' onClick={()=>{signOut(auth)}}>Cerrar Sesion</button>
                        </>
                    )
                }
            </div>
        </nav>
    </div>
  )
}
