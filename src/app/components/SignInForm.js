import React, { useState } from 'react';
import { signIn } from '../api/auth';
import { useRouter } from 'next/navigation';
import '../styles/signin.css';
import Link from 'next/link';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = React.useState(null);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      if (!email || !password) {
        setError('Please enter both email and password.');
        return;
      }

      console.log(email, password)

      const result = await signIn({ email, password });

      if (result.success) {
        setError(null);
        localStorage.setItem('jwtToken', result.token);
        router.push('/pages/dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
      console.error('Authentication error:', error);
    }
  };

  return (
    <div className='parent-container'>
      <div className="container">
        <h2>Sign In</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <button type="button" onClick={handleSignIn}>Sign In</button>
        </div>
        {error && <p style={{ color: 'red', fontSize: 12  }}>{error}</p>}
        <div className='navigate-page'><Link href={'/pages/signup'}>Sign up</Link></div>
      </div>
    </div>
  );
};

export default SignInForm;
