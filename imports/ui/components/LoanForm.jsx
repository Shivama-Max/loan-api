import React, { useState } from 'react';

const LoanRequestForm = () => {
    const [amount, setAmount] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        Meteor.call('loans.create', parseFloat(amount), (error) => {
            if (error) {
                alert(error.reason); 
            } else {
                alert('Loan request submitted successfully!');
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Loan Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Request Loan</button>
        </form>
    );
};

export default LoanRequestForm;
