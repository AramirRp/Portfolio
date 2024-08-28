import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i1g5cxb', 'template_xbtv2vo', form.current, 'lvQ3-k5MFEY7DXfO-')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });
    e.target.reset();
  };

  return (
    <div id='contact' className="bg-white py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-[#0983bc] to-[#4cbf95] bg-clip-text text-transparent inline-block w-full py-2">
            Echangeons !
          </h2>
        </div>
        <p className="text-center text-gray-700 text-lg sm:text-xl mb-12">
          Si vous souhaitez que l'on discute ensemble, que l'on parle collaboration ou bien encore de votre album musical préféré, n'hésitez pas !
        </p>
        
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            placeholder="Nom"
            name='user-name'
            required
            className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0983bc] transition duration-300"
          />
          <input
            type="email"
            placeholder="Email"
            name='user-email'
            required
            className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0983bc] transition duration-300"
          />
          <input
            type="text"
            placeholder="Sujet"
            name='subject'
            required
            className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0983bc] transition duration-300"
          />
          <textarea
            placeholder="Message"
            name="message"
            required
            className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0983bc] transition duration-300 min-h-[150px] resize-y"
          ></textarea>
          <div className="text-center">
            <button
              type='submit'
              className="px-8 py-3 bg-gradient-to-r from-[#0983bc] to-[#4cbf95] text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            >
              Envoyer message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;