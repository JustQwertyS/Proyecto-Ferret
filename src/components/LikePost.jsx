
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db} from '../firebaseConfig'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
/*Componente para el btn de Likes*/
export default function LikePost({id,likes}) {
    const [user] = useAuthState(auth);
    const likesRef = doc(db,"Hurones",id);

    const GivLike=()=>{
        if(likes?.includes(user.uid)){
            updateDoc(likesRef,{
                likes: arrayRemove(user.uid),
            }).then(()=>{
                console.log("Dislike");
            }).catch((e)=>{
                console.log(e);
            });
        } else{
            updateDoc(likesRef,{
                likes:arrayUnion(user.uid)
            }).then(()=>{
                console.log("like");
            }).catch((e)=>{
                console.log(e);
            });
        }
    }

    /*Color:?.inluir(si usuario) ? (mostrar like) o (no mostrar nada)*/
  return (
    <div>
        <i className={`fa fa-heart${!likes?.includes(user.uid)? "-o":""} "fa-lg"} btn`}
        style={{cursor:"pointer", color:likes?.includes(user.uid)?"red":null}}
        onClick={GivLike}
        />

       
    </div>
  )
}
