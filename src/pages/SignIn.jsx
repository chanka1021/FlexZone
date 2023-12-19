import React, { useState } from 'react';
import '../components/styles/Sign.css'


function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        // Add your sign-in logic here, e.g., make an API call to authenticate the user
        console.log('Signing in with:', email, password);
    };

    return (
        <div className='LoginForm'>
            <h2>Se connecter</h2>
            <form   onSubmit={handleSignIn}>
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
                        placeholder='Mot de pass'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Sign In</button>
            </form>
           <p>Vous n'avez pas de compte ? <a className='SignupLabel'> S'inscrire maintenant</a></p> 
        </div>
    );
}

export default SignIn;
