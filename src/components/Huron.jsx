import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom'
import { auth, db } from '../firebaseConfig';
import Comentario from './Comentario';
import LikePost from './LikePost';

export default function Huron() {
  const {id} = useParams();
  const [Huron, setHuron] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(
    ()=>{
      const docRef = doc(db,"Hurones",id);
      onSnapshot(docRef,(snapshot)=>{
        setHuron({...snapshot.data(),id:snapshot.id});
      });
  },[]);
    
  return (
    <div className='container border bg-light' style={{marginTop:10, marginBottom:70}}>
       {
         Huron && (
           <div className="row overflow-hidden">
               {/*Post*/}
              <div className='col-sm-3'>
                <img src={Huron.imageUrl} alt={Huron.title} className="imgMobile" style={{ padding: 10}}/>
              </div>
              <div className='col-9 mt-3 overflow-hidden'>
                  <h2>{Huron.title}</h2>
                  <h5>Creador: {Huron.createdBy}</h5>
                  <div>Fecha de publicación: {Huron.fechaCreacion.toDate().toDateString()}</div>
                  <hr/>
                  <textarea className='form-control' rows="5" style={{resize: "none"}} readOnly={true} defaultValue={Huron.descripcion}></textarea>
                  {/*Likes*/}
                  <div className='d-flex flex-row-reverse'> 
                    {user && <LikePost id={id} likes={Huron.likes}/>}
                    <div className='pe-2'>
                      <span>Likes {Huron.likes.length}</span>
                    </div>
                  </div>
                  {/*Comentarios*/}
                    <Comentario id={Huron.id}/>
              </div>

           </div>
         )
       }
    </div>
  )
}
