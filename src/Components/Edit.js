import React, { Component, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editExpense } from '../features/appSlice';

const Edit = (props) => {
  const [state, setState] = useState({
    date: props.user.date,
    name: props.user.name,
    category: props.user.category,
    amount: props.user.amount,
    id: props.user.id,
  });
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
      id: props.user.id,
    };
    dispatch(editExpense({ id: props.user.id, newExpense }));
    setState({
      date: '',
      name: '',
      category: '',
      amount: '',
    });
    props.handleClose();
  };
  return (
    <div>
      <div>
        <Form
          style={{
            width: '100%',
            minHeight: '300px',
            margin: '5px',
            padding: '10px',
          }}
          onSubmit={handleSubmit}
        >
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
              <span>Save Changes</span>
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Edit;
