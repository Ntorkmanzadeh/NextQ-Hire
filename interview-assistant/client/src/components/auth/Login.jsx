// import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../config/firebase';

// const LogIn = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await signInWithEmailAndPassword(auth, email, password);
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <div>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     autoComplete="email"
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     autoComplete="current-password"
//                 />
//             </div>
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default LogIn;