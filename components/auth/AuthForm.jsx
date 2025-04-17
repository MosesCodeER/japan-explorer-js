import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function AuthForm({ type, onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit({ email, password }); }}>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
      <button type="submit">{type === 'login' ? 'Login' : 'Register'}</button>
    </form>
  );
}