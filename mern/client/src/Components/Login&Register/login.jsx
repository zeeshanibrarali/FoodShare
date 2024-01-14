
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import { getDatabase, ref, child, get } from 'firebase/database';
import "../css/login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      window.localStorage.setItem("user", JSON.stringify(user));
      console.log(user);

      const dbRef = ref(getDatabase(), `users/${user.uid}`);
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        console.log(snapshot.val());
        navigate("/dashboard");
      } else {
        console.log("No data available");
        navigate("/personal-info");
      }
    } catch (error) {
      console.error("Error during Google login:", error);
      // Handle error gracefully and show user-friendly message
      navigate('/register');
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    const email = formData.email;
    const password = formData.password;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        if (user.password !== password) {
          console.log("User not found. Redirecting to register route...");
        }
        window.localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
      })
      .catch((err) => {
        if (
          err.code === AuthErrorCodes.INVALID_PASSWORD ||
          err.code === AuthErrorCodes.USER_DELETED
        ) {
          setError("The email address or password is incorrect");
          navigate("/register");
        } else {
          console.log(err.code);
          alert(err.code);
        }
      });
  };


  const switchToSignup = () => {
    navigate("/register");
  };

  return (
    <div className="loginMain">
      <div className="wrapper">
        <div className="title-text">
          <div className="title login">Login Form</div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input
              type="radio"
              name="slide"
              id="login"
              checked={true}
              onChange={() => { }}
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              checked={false}
              onChange={switchToSignup}
            />
            <label htmlFor="login" className="slide login">
              Login
            </label>
            <label htmlFor="signup" className="slide signup">
              Signup
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            <form onSubmit={handleSubmit} className="login">
              <div className="field">
                <input
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input
                  type="submit"
                  value="Login"
                />
              </div>
              {error && <div className="error">{error}</div>}
              <div className="signup">
                <div className="signup-connect">
                  <button type="button" onClick={loginWithGoogle} className="btn btn-social btn-google circular-icon">
                    <i className="fa fa-google"></i> Sign in with Google
                  </button>
                </div>
              </div>


              <div className="signup-link">
                Not a member?{" "}
                <a href="#" onClick={switchToSignup}>
                  Signup now
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

