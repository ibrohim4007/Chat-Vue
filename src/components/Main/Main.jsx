/* eslint-disable react/prop-types */
import './Main.css'
import back_img from "../../assets/icons/background_image.png";

function Main (props) {

    const {messages} = props;

    return(
        <main className='main'>
            <img className='main__img' src={back_img} alt="Back_img" />
            <div className="main__message-position">
                {messages.map((msg, index) => (
                    <div key={index} className={`message__text ${msg.type}`}>
                    {msg.type === 'text' ? (
                        <p>{msg.content}</p>
                    ) : (
                        <div className='message__img-send'>
                            <img className='msg__img-item' src={msg.content} alt={msg.comment} />
                            <p>{msg.comment}</p>
                        </div>
                        )}
                    </div>
                ))}
                </div>
        </main>
    );
}

export default Main;