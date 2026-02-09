import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { toast } from "sonner";


const Login = ({ onSignup }) => {
  const authenticate = useAuthStore((s) => s.authenticate);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberLogin, setRememberLogin] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }
    const res = authenticate(email, password);
    if (!res || !res.success) {
      toast.error(res?.message || "Invalid credentials");
      return;
    }
    toast.success("Login successful");
    navigate("/");
  };

  return (
    <div className="auth-card">
      <div className="auth-card-header">
        <h1 className="auth-title">Login to your account</h1>
        <p className="auth-subtitle">Welcome back! Enter your details to log in to your account</p>
      </div>

      <form onSubmit={handleLogin} className="auth-form">
        <EmailInput 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="auth-button">Login</button>
      </form>

      <p className="auth-footer-link">
        Don't have an account? <span onClick={onSignup}>Create an account</span>
      </p>
    </div>
  );
};

export default Login;
