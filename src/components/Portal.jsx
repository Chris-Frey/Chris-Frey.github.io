import React, { useState } from "react";
import Modal from './Modal.jsx'

const Portal = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className="portal">
        <button onClick={() => setShow((e) => !e)}>Project Portal</button>
        <Modal show={show} closeModal={() => setShow(false)}/>
      </div>
    </>
  )

}

export default Portal
