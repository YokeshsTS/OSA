import { useState } from "react";

const Signup = ({ onBack, onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    onRegister();
  };

  return (
    <div className="auth-card">
      <div className="auth-card-header">
        <h1 className="auth-title">Create your account</h1>
        <p className="auth-subtitle">Join us today and start your journey with amazing features</p>
      </div>

      <form onSubmit={handleRegister} className="auth-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input 
            id="name"
            type="text" 
            placeholder="Your Name" 
            required 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="email" 
            placeholder="sk.muzakkirhussain@gmail.com" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            id="password"
            type="password" 
            placeholder="••••••••" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="auth-button">Register</button>
      </form>

      <p className="auth-footer-link">
        Already have an account? <span onClick={onBack}>Back to login</span>
      </p>
    </div>
  );
};

export default Signup;
