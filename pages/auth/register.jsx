'use client';
import { useState } from 'react';
import AuthForm from '../../components/auth/AuthForm';

export default function RegisterPage() {
  const [error, setError] = useState('');

  const handleSubmit = async (data) => {
    console.log("Register", data);
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <AuthForm type="register" onSubmit={handleSubmit} />
    </div>
  );
}