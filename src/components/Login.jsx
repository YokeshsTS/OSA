import { useState } from "react";
import useAuthStore from "../store/authStore";

const Login = ({ onSignup }) => {
  const login = useAuthStore((s) => s.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberLogin, setRememberLogin] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email: email || "user@test.com" });
  };

  return (
    <div className="auth-card">
      <div className="auth-card-header">
        <h1 className="auth-title">Login to your account</h1>
        <p className="auth-subtitle">Welcome back! Enter your details to log in to your account</p>
      </div>

      <form onSubmit={handleLogin} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Everyday Email</label>
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
        <button type="submit" className="auth-button">Login</button>
      </form>

      <p className="auth-footer-link">
        Don't have an account? <span onClick={onSignup}>Create an account</span>
      </p>
    </div>
  );
};

export default Login;
