import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, {useState} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth, db, storage } from '../firebaseConfig';

    /*AddHuron*/
    /*Componente que renderiza el formulario y trabaja con los datos ofrecidos*/

export default function AddHuron() {
    const [user] = useAuthState(auth);
    const [formData, setFormData] = useState({
        title: "",
        descripcion: "",
        image: "",
        fechaCreacion: Timestamp.now().toDate(),
    });

    const [progress, setProgress] = useState(0);

    const Cambiar=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };

    const CambiarImagen=(e)=>{
        setFormData({...formData,image:e.target.files[0]});
    }
    const Publicar=()=>{
        if (!formData.title || !formData.descripcion || !formData.image){
            alert("Favor rellenar todos los datos y imagenes")
            return;
        }
        if (formData.title.length > 35) {
            toast("Error Favor elegir un titulo mas corto", {type: "error"});
            return;
        }

         /*Cambiar Nombre Para evitar imagenes con mismo nombre*/
        const storageRef = ref(storage,`/images/${Date.now()}${formData.image.name}`);

        const uploadImage = uploadBytesResumable(storageRef, formData.image);

        uploadImage.on("state_changed",
        (snapshot)=>{
             /*Recoge los bytes por los restantes divididos en 100 y convertidos a enteros con Math*/
            const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
            setProgress(progressPercent);
        },(err)=>{
            console.log(err);
        },()=>{
            setFormData({
                title: "",
                descripcion: "",
                image: "",
            });
            getDownloadURL(uploadImage.snapshot.ref).then((url)=>{
                const HuronesRef = collection(db, "Hurones");
                addDoc(HuronesRef, {
                    title: formData.title,
                    descripcion: formData.descripcion,
                    imageUrl: url,
                    fechaCreacion: Timestamp.now().toDate(),
                    createdBy:user.displayName,
                    userId:user.uid,
                    likes:[],
                    comentarios:[]
                }).then(() =>{
                    toast("Huron Publicado Correctamente",{type: "success"});
                    setProgress(0);
                })
                .catch(err=>{
                    toast("Errir Añadiendo el huron", {type: "errir"});
                });
            });
        }
        );     
    };
  return (
    <div className='border col-md-12 col-sm-12 p-3 mt-3 bg-light' style={{position:""}}>
        {
            !user?
            <>
                <h3> Iniciar Sesion para publicar un huron <Link to='/login'>Aqui</Link></h3>   
                Crear una cuenta <Link to='/register'>aqui</Link>
            </>
            :
            <>
              <h2>Añadir Huron</h2>
        <label htmlFor=''>Ubicación y Precio</label>
        <input type="text" name="title" className='form-control' value={formData.title} onChange={(e)=> Cambiar(e)}/>

        {/*descripcion*/}
        <label htmlFor=''>Descripción</label>
        <textarea name='descripcion' style={{resize: "none"}} className='form-control' value={formData.descripcion} onChange={(e)=> Cambiar(e)}/>
       
        {/*image*/}
        <label htmlFor=''>Imagen</label>
        <input type="file" name="image" accept='image/*' className='form-control'  onChange={(e)=> CambiarImagen(e)}/>
       
        {/*Barra de Progreso*/}
        {progress === 0 ? null :(
              <div className="progress">
              <div className="progress-bar progress-bar-striped mt-2" style={{width: `${progress}%`}}
              >
               {`Subiendo imagen ${progress}%`}
              </div>
          </div>
        )}
      
        <button className='form-control btn-primary mt-2' onClick={Publicar}>Publicar</button>
            </>
        }

    
    </div>
  )
}
