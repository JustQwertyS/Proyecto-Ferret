import emailjs from 'emailjs-com'
import { toast } from 'react-toastify';

const Mailer = () => {
    /*Api de emailJs conectado a una cuenta recogiendo
    (Servicio a usar) (Template del correo personalizado) (Values entregados del formulario) (Api key publica de la cuenta)) 
    */
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_8ek3q0r', 'template_e38i02l', e.target, 'FW389EQGb3-4v0eGI')
            .then(res => {
                toast("Recibira su respuesta pronto", { type: "success" });
            }).catch(err =>
                toast("Error enviando articulo" + err, { type: "error" })
            )
    }

    return (
        <div className='container'>
            <div className='col-lg-5 col-sm-8 bg-light border p-1 rounded mx-auto text-center'>
                <h4 className=''>Formulario de Contacto</h4>
                <p>
                    Rellene el formulario de abajo para cualquier duda o problema. <br />
                    Favor detallar y especificar las dudas o problemas lo mejor posible, para obtener la mejor solucion/repuesta posible.

                </p>
            </div>
            <div className='border p-3 bg-light mx-auto' style={{ maxWidth: 700, marginTop: 60, marginBottom: 70 }}>
                <h5>Contactar</h5>
                <form onSubmit={sendEmail}>
                    <div className='form-group'>
                        <label htmlFor="">Email</label>
                        <input type="email" className='form-control' placeholder='Coloca tu Email' name="user_email" required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Nombre</label>
                        <input type="name" className='form-control' placeholder='Coloca tu Nombre' name="name" required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Mensaje</label>
                        <textarea type="name" className='form-control' placeholder='Coloca tu Mensaje' name="message" required />
                    </div>

                    <br />
                    <button className='brn btn-primary' type="submit" value="send" >Enviar</button>
                </form>
            </div>

        </div>


    );
}

export default Mailer;