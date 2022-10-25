import React, { useRef, useEffect } from "react";
import "./Card.css";

export const Card = (props) => {
  const showModal = useRef();
  const hideModal = useRef();
  const modal = useRef();

  useEffect(() => {
    showModal?.current?.addEventListener("click", () => {
      modal?.current?.showModal();
      document.body.style.overflow = "hidden";
    });

    hideModal?.current?.addEventListener("click", () => {
      modal?.current?.close();
      document.body.style.overflow = "unset";
    });
  }, []);

  return (
    <>
      <div className="cd" ref={showModal}>
        <img src={props.pic} alt="Avatar" />
        <div className="cont">
          <h2>{props.name}</h2>
          <p className="title">{props.title}</p>
          <p>{props.role}</p>
        </div>
      </div>

      <dialog id="modal" ref={modal}>
        <section className="speakers-modal-container">
          <div className="modal-content">
            <button ref={hideModal} className="fs-3">
              x
            </button>
            <h2>{props.name}</h2>
            <h3>{props.title}</h3>
            <p className="text-justify text-break bio">{props.bio}</p>
          </div>
        </section>
      </dialog>
    </>
  );
};
