import useAuthStore from "../store/authStore";

const Login = ({ onSignup }) => {
  const login = useAuthStore((s) => s.login);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email: "user@test.com" });
  };

  return (
    <div className="auth-card">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>

      <p onClick={onSignup} className="link">
        Create an account
      </p>
    </div>
  );
};

export default Login;
