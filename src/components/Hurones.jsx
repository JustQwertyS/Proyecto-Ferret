import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, {useState , useEffect} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import {auth, db} from "../firebaseConfig";
import DeleteHuron from './DeleteHuron';
import LikePost from './LikePost';

export default function Hurones() {
  const adminUID = 'E5So5zmHBMV754y0wFuMogg9IXK2';
  const [user] = useAuthState(auth);
  const [hurones, setHurones] = useState([]);

  useEffect(()=>{
    const huronesRef = collection(db, "Hurones");
    const q = query(huronesRef, orderBy("fechaCreacion","desc"));
    
    try {
      onSnapshot(q, (snapshot)=>{
        const hurones = snapshot.docs.map((doc)=> ({
          id: doc.id,
          ...doc.data(),
        }));
        setHurones(hurones);
      });
    } catch (error) {
      
    }
    
  },[]);

 

  return (
    <div>
      {
        hurones.length === 0 ? (

          <div className='border col-lg-12 col-sm-6 mt-3 p-3 bg-light overflow-hidden'>
            <h1>No existe por el momento ningun Huron</h1>
            </div>
        ) : (
          
          hurones.map(({id, title, descripcion, imageUrl,fechaCreacion,createdBy,userId,likes,comentarios}) =>  (
          <div className='border col-lg-12 col-sm-6 mt-3 p-3 bg-light overflow-hidden' style={{backgroundColor:''}} key={id}>
            
            <div className="row">
              <div className="col-lg-3 col-sm-4">
              <Link to={`/hurones/${id}`}>
                <img src ={imageUrl} alt='title' style={{height:180, width:180}}/>
              </Link>
              </div>
              <div className="col-9 ps-3">
                <div className='row'>
                  <div className='col-6'>
                  {
                    createdBy && (
                      <span className='badge bg-primary'>{createdBy}</span>
                    )
                  }
                  </div>
                  <div className='col-6 d-flex flex-row-reverse'>
                   {
                       user && user.uid === userId && (
                         user && user.uid !== adminUID &&(
                          <DeleteHuron id={id} imageUrl={imageUrl}/>
                         )
                      )              
                    }
                   {
                       user && user.uid === adminUID && (
                        <DeleteHuron id={id} imageUrl={imageUrl}/>
                      )  
                    }
                  </div>
                </div>
                <h2>{title}</h2>
                <p>{fechaCreacion.toDate().toDateString()}</p>
                <textarea className='form-control' rows="4" style={{resize: "none"}} readOnly={true} defaultValue={descripcion}></textarea>

                <div className='d-flex flex-row-reverse'>
                  {user && <LikePost id={id} likes={likes}/>}
                  <div className="pe-2">
                   <p className='border rounded'>{likes?.length} Likes</p>
                  </div>
                  {
                    comentarios && comentarios.length > 0 &&(
                      <div className="pe-2">
                        <p className='border rounded'>{comentarios?.length} Comentarios</p>
                      </div>
                    )
                  }
                </div>

              </div>

            </div>
          </div>
          ))   
        )
      }
      </div>
  )
}
