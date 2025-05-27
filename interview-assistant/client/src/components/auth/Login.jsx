import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const { login, loginWithGoogle, resetPassword } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            await login(email, password);
        } catch (error) {
            setError('Failed to sign in: ' + error.message);
        }
    };

    const handleForgotPassword = async () => {
        try {
            setMessage('');
            setError('');
            if (!email) {
                setError('Please enter your email address');
                return;
            }
            await resetPassword(email);
            setMessage('Check your email for password reset instructions');
        } catch (error) {
            setError('Failed to reset password: ' + error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            setError('');
            await loginWithGoogle();
        } catch (error) {
            setError('Failed to sign in with Google: ' + error.message);
        }
    };

    return (
        <div className="login-container">
            <h2>Login to Interview Assistant</h2>
            {error && <div className="error-message">{error}</div>}
            {message && <div className="success-message">{message}</div>}

            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>
                <button type="button" className="forgot-password" onClick={handleForgotPassword}>
                    Forgot Password?
                </button>
            </form>

            <div className="divider">or</div>

            <button onClick={handleGoogleSignIn} className="google-button">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
                Sign in with Google
            </button>
        </div>
    );
};

export default Login;