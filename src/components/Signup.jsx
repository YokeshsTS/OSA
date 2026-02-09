const Signup = ({ onBack, onRegister }) => {
  const handleRegister = (e) => {
    e.preventDefault();
    onRegister();
  };

  return (
    <div className="auth-card">
      <h2>Signup</h2>

      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>

      <p onClick={onBack} className="link">
        Back to login
      </p>
    </div>
  );
};

export default Signup;
