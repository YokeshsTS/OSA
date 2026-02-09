import { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import NameInput from "./NameInput";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Signup = ({ onBack, onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = useAuthStore((s) => s.register);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }
    const res = register({ name, email, password });
    if (!res || !res.success) {
      toast.error(res?.message || "Unable to register");
      return;
    }
    toast.success("Registration successful — please log in");
    // After successful registration, navigate to login (parent will switch mode)
    onRegister();
  };

  return (
    <div className="auth-card">
      <div className="auth-card-header">
        <h1 className="auth-title">Create your account</h1>
        <p className="auth-subtitle">Join us today and start your journey with amazing features</p>
      </div>

      <form onSubmit={handleRegister} className="auth-form">
        <NameInput 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <EmailInput 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="auth-button">Register</button>
      </form>

      <p className="auth-footer-link">
        Already have an account? <span onClick={onBack}>Back to login</span>
      </p>
    </div>
  );
};

export default Signup;
