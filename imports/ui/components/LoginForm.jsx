import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        Meteor.loginWithPassword(email, password, (error) => {
            if (error) {
                alert(error.reason); 
            } else {
                history.push('/dashboard');
                alert('Logged in successfully');
                
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
