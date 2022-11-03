import "./FormStyles.css";

import React from 'react';
import {Link} from 'react-router-dom';

const Form = () => {
  return (
    <div className="form">
        <form>

            <label>Nom</label>
            <input type='text' placeholder='Dupont'></input>

            <label>Prénom</label>
            <input type='text' placeholder='Bertrand'></input>

            <label>Email</label>
            <input type='email' placeholder='contact@contact.com'></input>

            <label>Numéro de téléphone</label>
            <input type='number' placeholder='06-01-02-03-04'></input>

            <label>Message</label>
            <textarea rows='6' placeholder="Ecrivez moi un message sur votre demande "/>

            <Link to='#'>
                <button className="btn">Envoyer</button>
            </Link>


        </form>
    </div>
  )
}

export default Form
