import React from 'react'
import { ReactDOM } from 'react-dom';

const Modal = ({show, closeModal}) => {
  if (!show) return null;
  return ReactDOM.createPortal (
    <>
      <div className='modal'>
        <div className='overlay' onClick={closeModal}></div>
        <div className='content'>
          <h2>content</h2>
          <button onClick={closeModal}>close</button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  )
}

export default Modal