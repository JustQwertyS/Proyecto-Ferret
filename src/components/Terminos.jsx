import React from 'react'
import { Link } from 'react-router-dom'

export default function Terminos() {
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
                INFORMACIÓN RELEVANTE
                </h4>
                <p>
                Es requisito necesario para la adquisición de los productos que se ofrecen en este sitio,
                que lea y acepte los siguientes Términos y Condiciones que a continuación se redactan.<br /><br />
                El uso de nuestros servicios así como la compra de nuestros productos implicará que usted ha leído y aceptado los Términos y Condiciones de Uso en el presente documento.<br /><br />
                Todas los productos  que son ofrecidos por nuestro sitio web pudieran ser creadas, cobradas, enviadas o presentadas por una página web tercera y en tal caso estarían sujetas a sus propios Términos y Condiciones. En algunos casos, para adquirir un producto, será necesario el registro por parte del usuario, con ingreso de datos personales fidedignos y definición de una contraseña. <br /><br />
                El usuario puede elegir y cambiar la clave para su acceso de administración de la cuenta en cualquier momento, en caso de que se haya registrado y que sea necesario para la compra de alguno de nuestros productos. FriendlyFerret no asume la responsabilidad en caso de que entregue dicha clave a terceros. <br /><br />
                Todas las compras y transacciones que se lleven a cabo por medio de este sitio web, están sujetas a un proceso de confirmación y verificación, el cual podría incluir la verificación del stock y disponibilidad de producto, validación de la forma de pago, validación de la factura (en caso de existir) y el cumplimiento de las condiciones requeridas por el medio de pago seleccionado. En algunos casos puede que se requiera una verificación por medio de correo electrónico.<br /><br />
                Los precios de los productos ofrecidos en esta Tienda Online es válido solamente en las compras realizadas en este sitio web.
                </p>      
            </div>

            <div className='col-8 bg-light border mb-3 p-2 rounded'>
            <h4>LICENCIA</h4>
            FriendlyFerret  a través de su sitio web concede una licencia para que los usuarios utilicen 
            los productos que son vendidos en este sitio web de acuerdo a los Términos y Condiciones que se describen en este documento.
            <br /><br/>
            <h4>USO NO AUTORIZADO</h4>
            en caso de que aplique (para venta de software, templetes, u otro producto de diseño y programación) usted no puede colocar uno de nuestros productos, modificado o sin modificar, en un CD, sitio web o ningún otro medio y ofrecerlos para la redistribución o la reventa de ningún tipo.
            <br /><br/>
            <h4>PROPIEDAD</h4> 
            Usted no puede declarar propiedad intelectual o exclusiva a ninguno de nuestros productos, modificado o sin modificar.
            Todos los productos son propiedad  de los proveedores del contenido.
            En caso de que no se especifique lo contrario, nuestros productos se proporcionan  sin ningún tipo de garantía, expresa o implícita.
            En ningún esta compañía será  responsables de ningún daño incluyendo, pero no limitado a, daños directos, indirectos, especiales, fortuitos o consecuentes u otras pérdidas resultantes del uso o de la imposibilidad de utilizar nuestros productos.      
            <br/><br/>
            </div>
            
            <div className='col-8 bg-light border mb-3 p-2 rounded'>
            <h4>POLÍTICA DE REEMBOLSO Y GARANTÍA</h4>
            En el caso de productos que sean  mercancías irrevocables no-tangibles, no realizamos reembolsos
            después de que se envíe el producto, usted tiene la responsabilidad de entender antes de comprarlo.<br/><br/>
            Le pedimos que lea cuidadosamente antes de comprarlo. Hacemos solamente excepciones con esta regla cuando
            la descripción no se ajusta al producto. Hay algunos productos que pudieran tener garantía y posibilidad de reembolso
            pero este será especificado al comprar el producto. En tales casos la garantía solo cubrirá fallas de fábrica y sólo
            se hará efectiva cuando el producto se haya usado correctamente. <br/><br/>
            Los términos de la garantía están asociados a fallas de envio/enfermedades
            y sólo se harán efectivos
            estos términos si el equipo/envio ha sido usado correctamente. Esto incluye:      <br/><br/>

            – De acuerdo a las especificaciones de cuidado indicadas para cada producto.      <br/>
            – En condiciones ambientales acorde con las especificaciones indicadas.           <br/>
            </div>
            
            <div className='col-8 bg-light border mb-3 p-2 rounded'>
            <h4>COMPROBACIÓN ANTIFRAUDE</h4> 
            La compra del cliente puede ser aplazada para la comprobación antifraude.
            <br/>También puede ser suspendida por más tiempo para una investigación más rigurosa,
            para evitar transacciones fraudulentas. 
            <br/><br/>
            <h4>PRIVACIDAD</h4> 
            Este FriendlyFerret garantiza que la información personal que usted envía cuenta con la seguridad necesaria.<br/>
            Los datos ingresados por usuario o en el caso de requerir una validación de los pedidos no serán entregados a terceros,
            salvo que deba ser revelada en cumplimiento a una orden judicial o requerimientos legales.<br/><br/>
            La suscripción a boletines de correos electrónicos publicitarios es voluntaria y podría ser seleccionada al momento de crear su cuenta.
            FriendlyFerret reserva los derechos de cambiar o de modificar estos términos sin previo aviso.
            </div>

            <div className='col-sm-5 bg-light border mb-3 p-2 rounded'>
              <h4 className='text-center'>Uso</h4>
              <p className='text-center p-2'>
              Usted al <Link to={'/register'}>Crear una cuenta </Link> en <i>FriendlyFerret </i>
              esta aceptando los Terminos y Condiciones  e <Link to={'/privacy'}>Politicas de Privacidad</Link>. <br /><br />
              Si tiene alguna duda y quiera preguntar puede pulsar <Link to={'/contactar'}>Aqui</Link>, le respondemos cuanto antes.
              </p>
            </div>
        </div>
    </div>
  )
}
