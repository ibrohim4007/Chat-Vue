/* eslint-disable react/prop-types */
import { useState } from "react";
import './Modal.css'

const Modal = (props)=>{

    const { onClose, onSendImage} = props;
    const [imageUrl, setImageUrl] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
        if (imageUrl) {
          onSendImage(imageUrl, comment);
          setImageUrl('');
          setComment('');
        }
      };



    return(
        <div className={`modal active`}>
            <div className={`modal__dialog active`}>
                <h3 className="modal__dialog-title">
                    Отправить картинку
                </h3>

                <label>
                    <span>URL</span>
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} type="text" placeholder='URL'/>
                </label>
                <label>
                    <span>Комментарий</span>
                    <input type="text" value={comment} placeholder='Комментарий' onChange={(e) => setComment(e.target.value)}/>
                </label>

                <div className="modal__dialog-btns">
                    <button className='modal__dialog-btn-item cancel' 
                    onClick={onClose}>
                        Отмена
                    </button>
                    <button className='modal__dialog-btn-item send' onClick={handleSubmit}>
                        ОТПРАВИТЬ
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;