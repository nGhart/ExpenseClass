import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editExpense } from '../features/appSlice';

const Edit = (props) => {
  const [state, setState] = useState({
    date: props.item.date,
    name: props.item.name,
    category: props.item.category,
    amount: props.item.amount,
  });
  // console.log(props.item.name);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      date: state.date,
      name: state.name,
      category: state.category,
      amount: state.amount,
      id: props.item.id,
    };
    dispatch(editExpense(newExpense));
    setState({
      date: '',
      name: '',
      category: '',
      amount: '',
    });
    handleClose();
  };
  return (
    <div>
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

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form
          style={{
            width: '100%',
            minHeight: '300px',
            margin: '5px',
            padding: '10px',
          }}
          onSubmit={handleSubmit}
        >
          <h4 style={{ textAlign: 'center' }}>Edit</h4>
          <Form.Group
            className="mb-3"
            controlId="formBasicDate"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                width: '30%',
              }}
            >
              Date
            </Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={state.date}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicExpense"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                width: '30%',
              }}
            >
              Expense
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Expense"
              maxLength={20}
              name="name"
              value={state.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="exampleFormCategory"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                width: '30%',
              }}
            >
              Category
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              type="text"
              onChange={handleChange}
              name="category"
              value={state.category}
            >
              <option> Choose Category</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Groceries">Groceries</option>
              <option value="Utilities">Utilities</option>
              <option value="Rent">Rent</option>
              <option value="Self-care">Self-care</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
            style={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Form.Label
              style={{
                width: '30%',
              }}
            >
              Amount
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Amount"
              onChange={handleChange}
              name="amount"
              value={state.amount}
              required
            />
          </Form.Group>
          <Form.Group
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              border: 'none',
            }}
          >
            <Button
              type="submit"
              style={{ width: '150px', backgroundColor: 'cornflowerblue' }}
            >
              <span>Save</span>
            </Button>
          </Form.Group>
        </Form>
      </Modal>
    </div>
  );
};

export default Edit;
