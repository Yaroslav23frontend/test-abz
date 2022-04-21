import React, { useState } from "react";
import Success from "./Success";
export default function ModalWindow({
  visible,
  errorMassege,
  setModalVisible,
  successMassege,
}) {
  const [successful, setSuccessful] = useState(successMassege);
  function secssess() {
    setSuccessful(false);
  }
  return (
    <>
      {visible ? (
        <>
          {successMassege ? (
            <section className="section-modal">
              <div className="modal-container">
                <div className="modal-text-success">
                  <Success />
                </div>
              </div>
            </section>
          ) : (
            <section className="section-modal">
              <div className="modal-container">
                <div className="modal-title">
                  <p>Error message</p>
                  <button
                    className="modal-close"
                    onClick={(e) => {
                      e.preventDefault();
                      setModalVisible(false);
                    }}
                  >
                    <div className="button-close"></div>
                  </button>
                </div>
                <div className="modal-text">
                  {errorMassege.map((el) => (
                    <p>{el}</p>
                  ))}
                </div>
                <div className="modal-control-button">
                  <button
                    className="modal-control-button-save"
                    onClick={(e) => {
                      e.preventDefault();
                      setModalVisible(false);
                    }}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
}
