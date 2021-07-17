function Reciept(props) {
    function closeRecipt(){
        props.onCancel();
    }


  return (
    <div className="modal">
      <h>Here is your reciept</h>
      <p>Blah Blah Blah</p>
      <div>
      <button className="btn btn--alt" onClick={closeRecipt}>Close</button>
    </div>
    </div>
  );
}

export default Reciept;
