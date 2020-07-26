import React from 'react';

import './styles/NotFound.css'
import image404 from '../images/astronauts.svg';

function NotFound() {
  return (
    <section className="NotFound">
        <figure>
            <img
              className="img-fluid p-4"
              src={image404}
              alt="Astronautas"
            />
        </figure>
        <h2>Error 404</h2>
    </section>
  )
}

export default NotFound;