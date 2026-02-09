import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./Auth.scss";
import Login from "../components/Login";
import Signup from "../components/Signup";
import AuthLeftSection from "../components/AuthLeftSection";

const Auth = () => {
  const [params, setParams] = useSearchParams();
  const mode = params.get("mode") || "login";

  const switchMode = (newMode) => {
    setParams({ mode: newMode });
  };

  return (
    <div className="auth-container">
      <div className="leftSection">
        <AuthLeftSection/>
      </div>
      <AnimatePresence mode="wait">
        <div className="rightSection">
        {mode === "login" ? (
          <motion.div
            key="login"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Login onSignup={() => switchMode("signup")} />
          </motion.div>
        ) : (
          <motion.div
            key="signup"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Signup
              onBack={() => switchMode("login")}
              onRegister={() => switchMode("login")}
            />
          </motion.div>
        )}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Auth;
