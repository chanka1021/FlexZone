// SignUp.js

import React, { useState } from 'react';
import '../components/styles/Sign.css';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        // Add your sign-up logic here, e.g., make an API call to create a new user
        console.log('Signing up with:', name, email, password, confirmPassword);
    };

    return (
        <div className='LoginForm'>
            <h2>S'inscrire</h2>
            <form onSubmit={handleSignUp}>
                <label>
                    <input
                        placeholder='Nom'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    <input
                        placeholder='Email'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    <input
                        placeholder='Mot de passe'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    <input
                        placeholder='Confirmer le mot de passe'
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
}

export default SignUp;
