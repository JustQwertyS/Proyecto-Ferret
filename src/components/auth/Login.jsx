import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, Redirect, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebaseConfig';

export default function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user] = useAuthState(auth);

    const Entrar= async ()=>{
        try {
            await signInWithEmailAndPassword(auth,email,password);
            navigate('/'); 
        } catch (error) {
            toast(error.code, {type:"error"});
        }
    };
  return (
    !user ?(
        <div className='border p-3 bg-light mx-auto' style={{maxWidth:500,marginTop:60}}>
        <h1>Login</h1>
        <div className='form-group'>
            <label htmlFor="">Email</label>
            <input type="email" className='form-control' placeholder='Coloca tu Email' name=""  onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className='form-group'>
            <label htmlFor="">Contraseña</label>
            <input type="password" className='form-control' placeholder='Coloca tu Contraseña' name=""  onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <br/>
        <p><Link className='text-dark' to="/register">¿No posee una cuenta?</Link></p>
       
        <button className='brn btn-primary' onClick={Entrar}>Entrar</button>
    </div>
    ):(
        <Navigate to="/"/>
    )
   
   
  )
}
