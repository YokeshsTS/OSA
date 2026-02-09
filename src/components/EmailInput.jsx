const EmailInput = ({ value, onChange, placeholder = "Enter your email" }) => {
  return (
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input 
        id="email"
        type="email" 
        placeholder={placeholder}
        required 
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default EmailInput;
