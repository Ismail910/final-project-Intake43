import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PaymentC = () => {

  const [project, setProject] = useState(0);
  const [amount, setAmount] = useState(0);
  const [paymentId, setPaymentId] = useState(null);
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/paypal/pay', { amount });
      setPaymentId(response.data?.paymentId);
      
      window.location.href = response.data?.redirectUrl;
    } catch (error) {
      console.log(error.response?.data);
      // Handle error accordingly
      toast.error('Failed to initiate the payment.');
    }
  };

  const handleSuccess = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/success');
      if (response.status === 200 && response.data.message === 'Payment is Successful.') {
        // Handle successful payment
        toast.success('Payment completed successfully.');
        navigate('/client/');
      } else {
        // Handle other cases if needed
        toast.error('Failed to complete the payment.');
      }
    } catch (error) {
      console.log(error.response?.data);
      // Handle error accordingly
      toast.error('Failed to complete the payment.');
    }
  };

  const handleError = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/error');
      if (response.status === 200 && response.data === 'User declined the payment!') {
        // Handle payment cancellation
        toast.info('Payment cancelled by the user.');
        navigate('/payment');
      } else {
        // Handle other cases if needed
        toast.error('Failed to cancel the payment.');
      }
    } catch (error) {
      console.log(error.response?.data);
      // Handle error accordingly
      toast.error('Failed to cancel the payment.');
    }
  };
  return (
    <div>
      <h2>Pay with PayPal</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Pay Now</button>
      {paymentId && <h4>Payment ID: {paymentId}</h4>}
    </div>
  );
};

export default PaymentC

