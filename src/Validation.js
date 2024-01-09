import React, { useState } from 'react';

function EmailValidation() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  // Your email validation logic will go here'
  const validateEmail = () => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    setIsValid(emailPattern.test(email));
  };
  

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={validateEmail}>Validate Email</button>
      {isValid ? <p>Email is valid</p> : <p>Email is invalid</p>}
    </div>
  );
}

export default EmailValidation;
