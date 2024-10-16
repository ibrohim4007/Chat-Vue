/* eslint-disable no-unused-vars */
import { useState } from "react";
import NavBar from "./components/Navbar/NavBar.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Modal from "./components/Modal/Modal.jsx";

const App = () => {

  const [messages, setMessages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [status, setStatus] = useState('Оффлайн');

  
    const handleSendMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, { type: 'text', content: message }]);
      setCurrentMessage(''); 
    };

  const handleSendImage = (imageUrl, comment) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: 'image', content: imageUrl, comment },
    ]);
    setIsModalOpen(false);
  };

  // 

  return (
    <div style={{
    position: 'relative',
    top: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    }}>

      <NavBar status={status}/>
      <Main messages={messages} />
      <Footer onSendMessage={handleSendMessage} openModal={() => setIsModalOpen(true)} 
      setStatus={setStatus} />
      {isModalOpen && (
        <Modal onSendImage={handleSendImage} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default App;