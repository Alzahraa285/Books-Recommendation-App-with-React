import React, { useState } from 'react';
import './Register.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [response, setResponse] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // تحقق من شروط كلمة المرور
    if (password.length < 8) {
      setMessage("Password must be at least 8 characters.");
      return;
    } else if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password); // تأكد من تطابق الأسماء مع PHP
    formData.append('confirm_password', confirmPassword); // تأكد من تطابق الأسماء مع PHP

    try {
      const res = await fetch('http://localhost/contact-form-server/register.php', {
        method: 'POST',
        body: formData
      });

      const result = await res.json();
      setResponse(result.message);
      setMessage(''); // إعادة تعيين الرسالة عند نجاح التسجيل
    } catch (error) {
      setResponse('Error: ' + error.message);
    }
  };

  return (
    <div className="Regisert">
      <form className="Re_form" onSubmit={handleSubmit}>
        <h1>User Registration</h1>
        {message && <p style={{ color: 'red' }}>{message}</p>}
        {response && <p style={{ color: 'green' }}>{response}</p>}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}