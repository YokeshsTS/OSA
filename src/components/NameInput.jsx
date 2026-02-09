const NameInput = ({ value, onChange, placeholder = "Enter your Name" }) => {
  return (
    <div className="form-group">
      <label htmlFor="name">Full Name</label>
      <input 
        id="name"
        type="text" 
        placeholder={placeholder}
        required 
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default NameInput;
