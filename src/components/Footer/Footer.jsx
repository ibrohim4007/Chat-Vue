/* eslint-disable react/prop-types */

import {useState} from 'react';
import camera from "../../assets/icons/Frame.svg";
import send from "../../assets/icons/send.svg";
import './footer.css'

const Footer = (props) => {

  const {onSendMessage, openModal, showModal, setStatus} = props;

  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      handleSendMessage(true);
      onSendMessage(message);
      setMessage(''); 
    }
  };

  const handleInputFocus = () => {
    setInputFocused(true); 
    setMessageSent(false);
    setStatus('Онлайн');
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log(`Message sent: ${message}`);
      setMessage('');
      setInputFocused(false); 
      setMessageSent(true);
      setStatus('Оффлайн');
    }
  };


  return (
    <footer className='footer' >
      <div className="footer__input">
        <input value={message} onChange={(e) => setMessage(e.target.value)} onFocus={handleInputFocus} type="text"
        placeholder='Написать сообщение...' />
      </div>
      {!inputFocused && !messageSent && (
        <div className={`footer__img ${showModal ? 'unshow' : ''}`} >
          <img src={camera}  alt={camera} onClick={openModal}/>
        </div>
      )}
      {
        inputFocused && !messageSent && (
          <div className="footer__img" onClick={handleSubmit}>
            <img src={send}  alt={send} />
          </div>
        )}
      {messageSent && (
        <div className="footer__img" onClick={openModal}>
          <img src={camera}  alt={camera} />
        </div>
      )}

    </footer>
  );
}

export default Footer;