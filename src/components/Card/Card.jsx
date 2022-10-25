import React, { useRef, useEffect } from "react";
import { CloseCircleOutline } from 'react-ionicons'
import "./Card.css";

export const Card = (props) => {
  const showModal = useRef()
  const hideModal = useRef()
  const modal = useRef()

  useEffect(() => {
    showModal?.current?.addEventListener('click', () => {
      modal?.current?.showModal()
    })

    hideModal?.current?.addEventListener('click', () => {
      modal?.current?.close()
    })
  }, [])

  return (
    <>
      <div className="cd" ref={showModal}>
        <img src={props.pic} alt="Avatar" />
        <div className="cont">
          <h2>{props.name}</h2>
          <p>{props.title}</p>
          <p>{props.role}</p>
          {/* <p></p> */}
        </div>
      </div>

      <dialog id="modal" ref={modal}>
        <section className="speakers-modal-container">
          <div className="modal-content">
            <button ref={hideModal}>
              <CloseCircleOutline
                color={'#00000'} 
                title="close modal"
                height="30px"
                width="30px"
              />
            </button>
            Other modal Content here
          </div>
        </section>
      </dialog>
    </>
  );
};
