import React from 'react';
import { signUp } from '../api/auth';
import { useRouter } from 'next/navigation';
import '../styles/signin.css';
import Link from 'next/link';

const AuthPage = () => {
  const router = useRouter();
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [error, setError] = React.useState(null);

  const handleSignUp = async () => {
    try {
      if (!firstName || !lastName || !email || !password || !phoneNumber || !username) {
        setError('Please fill in all fields.');
        return;
      }

      const result = await signUp({ firstName, lastName, email, password, phoneNumber, username });

      if (result.success) {

        setError(null);

        router.push('/pages/signin');
      } else {

        setError('Sign-up failed. Please try again.');
      }
    } catch (error) {

      setError('An error occurred. Please try again later.');
      console.error('Sign-up error:', error);
    }
  };

  return (
    <div className='parent-container'>
      <div className="container">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="email">First Name:</label>
          <input id="email" placeholder="Enter Your First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Last Name:</label>
          <input type="text" id="email" placeholder="Enter Your Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter Your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="PhoneNumber">Phone Number:</label>
          <input type="text" id="PhoneNumber" placeholder="Enter Your Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="Username">Username:</label>
          <input type="text" id="Username" placeholder="Enter Your Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <button type="button" onClick={handleSignUp}>Sign Up</button>
        </div>
        {error && <p style={{ color: 'red', fontSize: 12 }}>{error}</p>}
        <div className='navigate-page'><Link href={'/pages/signin'}>Sign in</Link></div>
      </div>
    </div>
  );
};

export default AuthPage;
