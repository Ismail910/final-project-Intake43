import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PaymentEmp = ({ projectId }) => {
  const [project, setProject] = useState(null);

  const [paymentId, setPaymentId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`/api/projects/${projectId}`);
        setProject(response.data);
      } catch (error) {
        console.log(error.response?.data);
      }
    };

    fetchProject();
  }, [projectId]);

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/paypal/pay', {
        amount: project?.budget || 0
      });
      setPaymentId(response.data?.paymentId);
      window.location.href = response.data?.redirectUrl;

      
    } catch (error) {
      console.log(error.response?.data);
      
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
      {project ? (
        <div>

          <p>Project Name:  </p>
          <p>Project Name: {project.name}</p>
          <p>Project Budget: {project.budget}</p>
        </div>
      ) : (
        <p>No projects available.</p>
      )}
      {project && (
        <input type="hidden" name="amount" value={project.budget} />
      )}
      <button  onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentEmp

