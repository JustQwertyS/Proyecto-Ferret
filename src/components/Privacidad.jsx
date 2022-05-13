import React from 'react'
import { Link } from 'react-router-dom'

export default function Privacidad() {
  return (
    <div className='container' style={{marginTop:10, marginBottom:70}}>
    <div className='row d-flex justify-content-center fFooter footer-md-text'>
        <div className='col-sm-5 bg-white border mb-3 p-2 text-center rounded'>
            <h4>
            Términos y Condiciones de Uso
            </h4>     
        </div>

        <div className='col-8 bg-light border mb-3 p-2 rounded'>
            <h4>
            POLÍTICA DE PRIVACIDAD
            </h4>
            <p>
            El presente Política de Privacidad establece los términos en que FriendlyFerret usa y protege la información
            que es proporcionada por sus usuarios al momento de utilizar su sitio web.<br/>
            Esta compañía está comprometida con la seguridad de los datos de sus usuarios.<br/><br/>
            Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado,
            lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento.<br/><br/>
            Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos
            y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.<br/>
            </p>      
        </div>

        <div className='col-8 bg-light border mb-3 p-2 rounded'>
        <h4>Información que es recogida</h4>
        Nuestro sitio web podrá recoger información personal por ejemplo:<br/>
        Nombre,  información de contacto como  su dirección de correo electrónica e información demográfica.<br/><br/>
        Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido
        o realizar una entrega o facturación.
        <br /><br/>

        <h4>Uso de la información recogida</h4>
        Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible,
        particularmente para mantener un registro de usuarios, de pedidos en caso que aplique,
        y mejorar nuestros productos y servicios.<br/><br/>  Es posible que sean enviados correos electrónicos periódicamente
        a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria
        que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos
        serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.<br/><br/>

        FriendlyFerret está altamente comprometido para cumplir con el compromiso de mantener su información segura.
        Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún
        acceso no autorizado.
        <br /><br/>
       
        <h4>Enlaces a Terceros</h4> 
        Este sitio web pudiera contener en laces a otros sitios que pudieran ser de su interés.
        Una vez que usted de clic en estos enlaces y abandone nuestra página,
        ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad
        ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus
        propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar
        que usted está de acuerdo con estas.   
        <br/><br/>
        </div>
        
        <div className='col-8 bg-light border mb-3 p-2 rounded'>
        <h4>Control de su información personal</h4>
        En cualquier momento usted puede restringir la recopilación
        o el uso de la información personal que es proporcionada a nuestro sitio web.<br/><br/>
        Cada vez que se le solicite rellenar un formulario, como el de alta de usuario,
        puede marcar o desmarcar la opción de recibir información por correo electrónico.<br/><br/>
        En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.
        Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento,
        salvo que sea requerido por un juez con un orden judicial.<br/><br/>
        FriendlyFerret Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.
        </div>

        <div className='col-sm-5 bg-light border mb-3 p-2 rounded'>
          <h4 className='text-center'>Uso</h4>
          <p className='text-center p-2'>
          Usted al <Link to={'/register'}>Crear una cuenta </Link> en <i>FriendlyFerret </i>
          esta aceptando los <Link to={'/terms'}>Terminos y Condiciones  </Link>e Politicas de Privacidad. <br /><br />

          Si tiene alguna duda y quiera preguntar puede pulsar <Link to={'/contactar'}>Aqui</Link>, le respondemos cuanto antes.
          </p>
        </div>
    </div>
</div>
  )
}
