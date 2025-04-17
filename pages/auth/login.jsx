'use client';
import { useState } from 'react';
import AuthForm from '../../components/auth/AuthForm';

export default function LoginPage() {
  const [error, setError] = useState('');

  const handleSubmit = async (data) => {
    console.log("Login", data);
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <AuthForm type="login" onSubmit={handleSubmit} />
    </div>
  );
}