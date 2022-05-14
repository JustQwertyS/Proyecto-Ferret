import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [user] = useAuthState(auth);
    let navigate = useNavigate();

       
    /*Register de auth con firebase*/
    const Registrar = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, { displayName: name });
            console.log(auth.currentUser);
            navigate('/');
        } catch (error) {
            toast(error.code, { type: "error" });
        }
    };
    return (
        !user ?(
        <div className="container">
            <div className='border p-3 bg-light '>
                <h3>Registrarse</h3>
                <div className='form-group'>
                    <label htmlFor="">Nombre</label>
                    <input type="text" className='form-control' placeholder='Coloca tu nombre' name="" onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Email</label>
                    <input type="email" className='form-control' placeholder='Coloca tu Email' name="" onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Contraseña</label>
                    <input type="password" className='form-control' placeholder='Coloca tu Contraseña' name="" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <br/>
                <p><Link className='text-dark' to="/login">¿Ya tienes una cuenta?</Link></p>
                <p>
                Al Registrarte estas aceptando los <Link className='text-dark' to="/terms">Terminos y condiciones de uso</Link> y las <Link className='text-dark' to="/privacy">Politicas de Privacidad</Link>
                </p>
                <button className='brn btn-primary' onClick={Registrar}>Registrar</button>
            </div>
        </div>  
        ):(
        <Navigate to="/"/>
        )
        


    )
}
