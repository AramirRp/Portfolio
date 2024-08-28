import React, { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../Themes/ThemeContext";

export const Contact = () => {
  const form = useRef();
  const { theme } = useContext(ThemeContext);

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

  const getThemeStyles = () => {
    switch (theme) {
      case 'dark':
        return {
          bg: 'bg-gray-900',
          text: 'text-gray-200',
          input: 'bg-gray-800 border-gray-700 text-gray-200',
          inputFocus: 'focus:ring-blue-500',
          button: 'from-blue-600 to-teal-500',
        };
      case 'custom':
        return {
          bg: 'bg-orange-50',
          text: 'text-orange-900',
          input: 'bg-orange-100 border-orange-300 text-orange-900',
          inputFocus: 'focus:ring-orange-500',
          button: 'from-orange-400 to-red-500',
        };
      default: // light
        return {
          bg: 'bg-white',
          text: 'text-gray-700',
          input: 'bg-white border-gray-300 text-gray-700',
          inputFocus: 'focus:ring-[#0983bc]',
          button: 'from-[#0983bc] to-[#4cbf95]',
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <div id='contact' className={`${styles.bg} py-16 sm:py-24 transition-colors duration-300`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden mb-8">
          <h2 className={`text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r ${styles.button} bg-clip-text text-transparent inline-block w-full py-2`}>
            Echangeons !
          </h2>
        </div>
        <p className={`text-center ${styles.text} text-lg sm:text-xl mb-12`}>
          Si vous souhaitez que l'on discute ensemble, que l'on parle collaboration ou bien encore de votre album musical préféré, n'hésitez pas !
        </p>
        
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            placeholder="Nom"
            name='user-name'
            required
            className={`w-full px-4 py-3 ${styles.input} rounded-lg focus:outline-none focus:ring-2 ${styles.inputFocus} transition duration-300`}
          />
          <input
            type="email"
            placeholder="Email"
            name='user-email'
            required
            className={`w-full px-4 py-3 ${styles.input} rounded-lg focus:outline-none focus:ring-2 ${styles.inputFocus} transition duration-300`}
          />
          <input
            type="text"
            placeholder="Sujet"
            name='subject'
            required
            className={`w-full px-4 py-3 ${styles.input} rounded-lg focus:outline-none focus:ring-2 ${styles.inputFocus} transition duration-300`}
          />
          <textarea
            placeholder="Message"
            name="message"
            required
            className={`w-full px-4 py-3 ${styles.input} rounded-lg focus:outline-none focus:ring-2 ${styles.inputFocus} transition duration-300 min-h-[150px] resize-y`}
          ></textarea>
          <div className="text-center">
            <button
              type='submit'
              className={`px-8 py-3 bg-gradient-to-r ${styles.button} text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out`}
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