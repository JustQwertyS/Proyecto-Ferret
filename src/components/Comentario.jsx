import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebaseConfig';
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function Comentario({ id }) {
    const [comentario, setComentario] = useState("");
    const [comentarios, setComentarios] = useState([]);
    const [usuarioActivo] = useAuthState(auth);
    const commentRef = doc(db, "Hurones", id)
    const adminUID = 'E5So5zmHBMV754y0wFuMogg9IXK2';

    /*Recoger Referencia del Firebase*/
    useEffect(() => {
        const docRef = doc(db, "Hurones", id)
        onSnapshot(docRef, (snapshot) => {
            setComentarios(snapshot.data().comentarios);
        })
    }, []);

    /*deleteComment*/
    const deleteComment = (comentario) => {
        console.log(comentario);
        updateDoc(commentRef, {
            comentarios: arrayRemove(comentario)
        }).then((e) => {
            console.log(e);
        }).catch((error) => {
            console.log(error);
        });
    }

    /*Añade al array [comentarios] de la colección de hurones en firebase*/
    const cambiarComentario = async => {
        try {
            if (comentario.length > 1) {
                updateDoc(commentRef, {
                    comentarios: arrayUnion({
                        user: usuarioActivo.uid,
                        userName: usuarioActivo.displayName,
                        comentario: comentario,
                        fechaCreacion: new Date(),
                        commentarioID: uuidv4()
                    })
                }).then(
                    () => {
                        setComentario("");
                        toast("Comentario Publicado Correctamente", { type: "success" });
                    }
                );
            }
        } catch (error) {
            toast("Error al publicar comentario", { type: "error" });
            console.log(error);
        }
    }
    return (
        <div>Comentario
            <div className='container'>
                {
                    comentarios !== null && comentarios.map(({ commentarioID, user, comentario, userName, fechaCreacion }) => (
                        <div key={commentarioID}>
                            <div className='border p-2 mt-2 row mb-4'>
                                <div className="col-10">
                                    <span className={`badge ${usuarioActivo && user === usuarioActivo.uid ? "bg-success" : "bg-primary"}`}>{userName}</span>

                                    <textarea className='form-control' rows="3" style={{ resize: "none" }} readOnly={true} defaultValue={comentario}></textarea>
                                </div>
                                <div className="col-2 d-flex flex-row-reverse">
                                    {fechaCreacion.toDate().toDateString()}

                                  
                                    {/*Botones para borrar uno para usuarios otro para admin*/}
                                    {
                                        usuarioActivo && user === usuarioActivo.uid && (
                                            usuarioActivo && usuarioActivo.uid !== adminUID && (
                                                <i className="fa fa-times" style={{ cursor: "pointer" }} onClick={() => deleteComment({ commentarioID, user, comentario, userName, fechaCreacion })}></i>
                                            )
                                        )
                                    }
                                    {
                                        usuarioActivo && usuarioActivo.uid === adminUID && (
                                            <i className="fa fa-times-circle" style={{ cursor: "pointer" }} onClick={() => deleteComment({ commentarioID, user, comentario, userName, fechaCreacion })}></i>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    ))}
                {
                    usuarioActivo && (
                        <button className='brn btn-primary' onClick={cambiarComentario}>Publicar</button>
                    )
                }
                {
                    usuarioActivo && (
                        <textarea rows="4" cols="50" type="text" className="form-control mt-4 mb-5" value={comentario} onChange={(e) => { setComentario(e.target.value) }} placeholder="añadir Comentario" />
                    )
                }

                {/*Si no tengo usuario activo mostrar casilla para iniciar sess*/}
                
                {     
                    !usuarioActivo ?
                        <>
                            <div className='border col-4 p-2 m-2'>
                                <h3> Iniciar Sesion para Comentar <Link to='/login'>Aqui</Link></h3>
                                Crear una cuenta <Link to='/register'>aqui</Link>
                            </div>
                        </>
                        :
                        <>
                        </>
                }
            </div>
        </div>
    )
}
