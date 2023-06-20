import React,{useState} from 'react';
import { deleteExpense } from '../features/appSlice';
import { useDispatch } from 'react-redux';
import { Modal,Button } from 'react-bootstrap';
import Edit from './Edit';

const SingleExpense = (props) => {
  const dispatch = useDispatch();

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <section
      style={{
        padding: '5px',
        borderRadius: '5px',
        boxShadow: '2px 2px 2px 2px grey',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ width: '20%' }}>{props.user.date}</div>
      <div style={{ width: '40%' }}>
        <h6 style={{ fontWeight: 700 }}>{props.user.name}</h6>
        <p style={{ fontStyle: 'italic' }}>Category:{props.user.category}</p>
      </div>
      <div style={{ width: '20%' }}>
        <p>
          GHC{' '}
          <span
            style={{
              fontWeight: 'bold',
            }}
          >
            {props.user.amount}
          </span>
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
 <button
          style={{
            width: '60px',
            backgroundColor: 'grey',
            color: 'white',
            borderRadius: '5px',
            margin: '2px',
            border: 'none',
          }}
          onClick={handleShow}
        >
          Edit
        </button>
        <button
          style={{
            width: '60px',
            backgroundColor: 'grey',
            color: 'white',
            borderRadius: '5px',
            margin: '2px',
            border: 'none',
          }}
          onClick={() => {
            dispatch(deleteExpense(props.user.id));
          }}
        >
          Delete
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>        
            <Edit user={props.user} editExpense={props.editExpense}/>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default SingleExpense;
