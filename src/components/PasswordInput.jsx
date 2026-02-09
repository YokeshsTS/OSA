import { useState } from "react";
import eyeOpen from "../assets/password_eye.svg";
import eyeClosed from "../assets/eye-password-hide-svgrepo-com.svg";

const PasswordInput = ({ value, onChange, placeholder = "Enter your password" }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <div className="password-input-wrapper">
        <input 
          id="password"
          type={isPasswordVisible ? "text" : "password"}
          placeholder={placeholder}
          required 
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          className="password-toggle-btn"
          onClick={togglePasswordVisibility}
          aria-label={isPasswordVisible ? "Hide password" : "Show password"}
        >
          <img 
            src={isPasswordVisible ? eyeOpen : eyeClosed} 
            alt={isPasswordVisible ? "Hide" : "Show"}
          />
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
