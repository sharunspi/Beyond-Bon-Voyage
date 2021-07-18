import {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import Reciept from "./Reciept";
function Todo(props) {
  const [modalIsOpen, setModalIsOpen] =useState(false);

  function deleteHandler() {
    setModalIsOpen(true);

  }
  function closeModalHandlerConfirm(){
    setModalIsOpen(false);
    setRecieptIsOpen(true);
  }

  function closeModalHandlerCancel(){
    setModalIsOpen(false);
  }
  function closeEverything(){
    setModalIsOpen(false);
    setRecieptIsOpen(false);
  }

  const [RecieptIsOpen, setRecieptIsOpen] =useState(false);



  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Pay Now
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandlerCancel} onConfirm={closeModalHandlerConfirm} />}
      {(modalIsOpen || RecieptIsOpen) && <Backdrop onCancel={closeEverything}/>}
      {RecieptIsOpen && <Reciept onCancel={closeEverything}/>}
    </div>
  );
}

export default Todo;
