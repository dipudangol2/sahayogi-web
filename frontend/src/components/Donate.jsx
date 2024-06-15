import  { useState } from 'react';
import "./Donate.css";

const Donate = () => {

  const [payment, setPayment] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!description) {
      validationErrors.description = 'Description is required';
    }
    if (!payment) {
      validationErrors.payment = 'Payment is required';
    }
    if (!amount) {
      validationErrors.amount = 'Amount is required';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Description:', description);
      console.log('Payment:', payment);
      console.log('Amount:', amount);

      // await fetch("apiname");

    } else {
      alert("fill all fields")
    }


  };

  return (
    <div className='diver'>
      <h1>DONATE</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Payment:</label><br />
          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          >
            <option value="" disabled>Select a payment method</option>
            <option value="Esewa">Esewa</option>
            <option value="Khalti">Khalti</option>
            <option value="Bank">Bank</option>
          </select>
          {errors.payment && <p>{errors.payment}</p>}
        </div>
        <label>
          DESCRIPTION:<br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        {errors.description && <p>{errors.description}</p>}
        <label>
          AMOUNT:<br />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        {errors.amount && <p>{errors.amount}</p>}
        <br /><br />
        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default Donate;