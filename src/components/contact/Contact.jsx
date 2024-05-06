import { useRef } from 'react'
import emailjs from '@emailjs/browser';

import './contact.css'

import theme_pattern from "../../assets/theme_pattern.png"


export const Contact = () => {

    const form = useRef()

    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_i1g5cxb', 'template_xbtv2vo', form.current ,'lvQ3-k5MFEY7DXfO-')
        .then((result) => {
            console.log(result.text);

        }, (error) =>{
            console.log(error.text);
        });
        e.target.reset();
    };

  return (
    <div id='contact' className="contact">
        <div className="contact-title">
            <h2>Me contacter</h2>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h2>Echangons ! </h2>
                <p>Si vous souhaitez que l'on discute ensemble, que l'on parle, collaboration ou bien encore de votre album musical préféré, n'hésitez pas ! </p>
                <div className="contact-details">
                    <div className="contact-detail">
                    </div>
                    <div className="contact-detail">
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <form className='--form-control --card' ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="Nom"
                    name=' user-name' required/>
                   <input type="email" placeholder="email"
                    name=' user-email' required/>
                    <input type="text" placeholder="Sujet"
                    name=' subject' required/>
                    <textarea  placeholder="message" name="message" cols="30" rows="10"></textarea>
                    <button className='contact-submit' type='submit'>Envoyer message</button>
                </form>
            </div>
        </div>
    </div>

)
}

export default Contact