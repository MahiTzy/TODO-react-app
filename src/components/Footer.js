import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';

const Footer = () => {
  const date=new Date();
  const year=date.getFullYear();
  return (
    <footer>
    <div className="footer">
        <p>Designed with <FontAwesomeIcon className="fotfas" icon="fa-solid fa-heart" /> by <span><a href="https://portfolio-mohit-one.vercel.app/
">Mohit Singh</a> </span>- {year}</p>
        </div>
    </footer>
  )
}

export default Footer
