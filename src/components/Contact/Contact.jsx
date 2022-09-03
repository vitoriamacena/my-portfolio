import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import {IoMdSend} from 'react-icons/io'
import Map from '../Map/Map';

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hdruhu9', 'template_tiyi0ae', form.current, 'h1UviwE9QGNg6QBO6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      };


  return (
    <div id='contact' className='form-container' >
        <div className="form-wrapper">
            <p><span>📪</span>Contato</p>
            <h2>Vamos conversar!</h2>
            <form method='post' ref={form} onSubmit={sendEmail}  >
                <div className="side">
                    <div className='input-wrapper'>
                        <input
                        required autoComplete='off' 
                        type="text" 
                        id='name' 
                        name='user_name' 
                        value={name}
                        onChange={(e) => setName(e.target.value) }
                        />
                        <label className='label' htmlFor='name'>
                            <span>Nome</span>
                        </label>
                    </div>
                    <div className='input-wrapper'>
                        <input
                        required 
                        autoComplete='off'
                        type='text' 
                        // type="email" 
                        id='email' 
                        name="user_email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value) }
                        />
                        <label className='label' htmlFor='email'>
                            <span>Email</span>
                        </label>
                    </div>
                </div>

                <div className="input-wrapper">
                    <input
                     required 
                     autoComplete='off' 
                     type="text" 
                     id='subject' 
                     name='subject' 
                     value={subject}
                     onChange={(e) => setSubject(e.target.value) }
                     />
                    <label htmlFor="subject">
                        <span>Assunto</span>
                    </label>
                </div>

                <div className='input-wrapper'>
                    <textarea 
                    required
                    autoComplete='off' 
                    name="message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value) }
                    />
                    <label htmlFor="message">
                        <span>Mensagem</span>
                    </label>
                </div>
                <div className='submit'>
                    <input name='submit' type="submit" value=''/>
                    <label htmlFor="submit">
                        <span><IoMdSend/></span>
                    </label>
                </div>
            </form>
        </div>
        <div className="content-right">
            <Map />
        </div>     
    </div>
  )
}

export default Contact