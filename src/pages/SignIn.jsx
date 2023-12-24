import React, { useState } from 'react';
import '../components/styles/Sign.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user,setUser] = useState(null);
    const handleSignIn = async (e) => {
        e.preventDefault();
        // Add your sign-in logic here, e.g., make an API call to authenticate the user
        try {
            const data = await  axios.post("/login",{email,password})
            console.log(data.message) 
        } catch (error) {
            //console.log(error)
        }
      
       // console.log('Signing in with:', email, password);
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
           <p>Vous n'avez pas de compte ? <Link className='SignupLabel' to={'/signup'}>S'inscrire maintenant</Link></p> 
        </div>
    );
}

export default SignIn;
