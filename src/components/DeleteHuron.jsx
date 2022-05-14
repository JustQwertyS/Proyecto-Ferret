import { deleteDoc, doc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage';
import React from 'react'
import { toast } from 'react-toastify';
import { db, storage } from '../firebaseConfig'
/*Boton de Borrar Huron o post, 
    id: referencia de que post
    imageUrl: referencia de la imagen a eliminar en storage
*/
export default function DeleteHuron({id,imageUrl}) {
    const eliminar= async()=>{
            if (window.confirm("¿Estas seguro que quieres eliminar este post?")) {
                try {
                    deleteDoc(doc(db,"Hurones",id));
                    toast("Huron Eliminado Correctamente", {type: "success"});
                    const storageRef = ref(storage,imageUrl);
                    await deleteObject(storageRef)
                } catch (error) {
                    toast("Error elimiando articulo", {type: "error"});
                    console.log(error);
                }   
            };
        
    }
  return (
    <div>
        <i className='fa fa-times' onClick={eliminar} style={{cursor: "pointer"}}></i>
    </div>
  )
}
