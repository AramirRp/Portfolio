import { useRef } from 'react'
import emailjs from '@emailjs/browser';

import './contact.css'



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
    <div id='contact' className="flex flex-col items-center justify-center mt-10 gap-20 w-[100%]">
        <div className="contact-title relative z-[-2]">
            <h2 className='text-2xl font-semibold px-[30px] py-0 hidden'>Me contacter</h2>
        </div>
            <div className="contact-left w-[100%] flex flex-col gap-[30px]">
                <h2 className='text-[66px] font-bold bg-clip-text'>Echangons ! </h2>
                <p className=' text-black text-xl '>Si vous souhaitez que l'on discute ensemble, que l'on parle, collaboration ou bien encore de votre album musical préféré, n'hésitez pas ! </p>
                <div className="contact-details flex flex-col gap-[30px] text-black text-[22px]">
                    <div className="contact-detail flex items-center gap-5">
                    </div>
                    <div className="contact-detail flex items-center gap-5">
                    </div>
                </div>
            
            <div className="contact-right ml-[2%] flex flex-col gap-[30px]">
                <form className='--form-control --card' ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="Nom"
                    name=' user-name' required/>
                   <input type="email" placeholder="email"
                    name=' user-email' required/>
                    <input type="text" placeholder="Sujet"
                    name=' subject' required/>
                    <textarea  placeholder="message" name="message" cols="30" rows="10"></textarea>
                    <button className='contact-submit  px-[5%] py-[3%]' type='submit'>Envoyer message</button>
                </form>
            </div>
        </div>
    </div>
)
}

export default Contact