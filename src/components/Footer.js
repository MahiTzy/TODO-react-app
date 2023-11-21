import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';

const Footer = () => {
  const date=new Date();
  const year=date.getFullYear();
  return (
    <footer>
    <div className="footer">
        <p>{year}</p>
        <p>Made with <FontAwesomeIcon className="fotfas" icon="fa-solid fa-heart" /> by Mohit <span>Singh</span></p>
        </div>
    </footer>
  )
}

export default Footer
