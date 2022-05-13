import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGoogle, faTwitter, faInstagram, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start ">

  <div className="container">

      <div className="row" >
      <div className='navbar d-flex justify-content-center'>
      <div className="col-lg-4 col-md-12 mb-4 mb-md-0 footer-SM footer-tablet">
        <strong className="text-uppercase">¿Donde operamos?</strong>
        <p>
         Operamos en Canarias donde Podemos fomentar el cariño y amor por estos animalitos.<br/>
         ¡Planemamos extendernos mucho mas!<br/> De momento las ventas y visitas estan sujetas a las islas.
        </p>
      </div>
      
      <div className="col-lg-3 col-md-12 mb-4 mb-md-0 footer-sm-text footer-md-text ">
        <strong className="text-uppercase">¿Nesecitas ayuda?</strong>
        <ul className="list-unstyled">
          <li className='mb-1'>
          <Link className='text-dark' to="/contactar">Contactar </Link>
          </li>
          <li className='mb-1'>
          <Link className='text-dark' to="/terms">Terminos y condiciones de uso</Link>
          </li >
          <li className='mb-1'>
          <Link className='text-dark' to="/privacy">Política de privacidad</Link> 
          </li>
        </ul>
      </div>

      <div className="col-lg-2 col-md-12 mb-4 mb-md-0 footer-sm-text footer-SM" >
        <strong className="text-uppercase">FriendlyFerret</strong>
        <ul className="list-unstyled">
          <li className='mb-1'>
            <a href="#!" className="text-dark">Nuestro Blog</a>
          </li>
          <li className='mb-1'>
            <a href="#!" className="text-dark">Unete al equipo</a>
          </li >
          <li className='mb-1'>
            <a href="#!" className="text-dark">Productos</a>
          </li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-12 mb-4 mb-md-0 footer-sm-text footer-SM">
        <strong className="text-uppercase ">Redes</strong>
    
        <section className='sectionA'>
          <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
            ><FontAwesomeIcon icon={faFacebookF}/></a>
          <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
            ><FontAwesomeIcon icon={faTwitter}/></a> 
          <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
            ><FontAwesomeIcon icon={faGoogle}/></a>
          <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
            ><FontAwesomeIcon icon={faInstagram}/></a>
          <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
            ><FontAwesomeIcon icon={faLinkedin}/></a>
          <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
            ><FontAwesomeIcon icon={faGithub} /></a>
        </section>
      </div>

      </div>
    </div>
    <div className="text-center footer-md-text">
    © 2022 Copyright:
    <Link to={'/'}> FriendyFerret.com</Link>
   
   </div>
  </div>

  
 
</footer>
  )
}
