import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useRecoverpassword from "../../hooks/useRecoverPassword";
import { IoIosClose } from "react-icons/io";
import "./ForgotPassword.css";

const RecoverPassword = () => {
  const {
    isValidUrl,
    checkForUrl,
    updatePassword,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    okMessage,
    failMessage,
  } = useRecoverpassword();

  const navigate = useNavigate();

  useEffect(() => {
    checkForUrl();
  }, []);

  return (
    isValidUrl && (
      <div className="form forgot-password-container">
        <h2>Please enter your new password</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updatePassword(password, confirmPassword);
          }}
        >
          <IoIosClose
            className="checkout-template-close"
            onClick={() => navigate("/")}
          />
          <div className="forgot-pw-form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="forgot-input"
              placeholder="Password, with at least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
            />
            <label htmlFor="password2">Confirm password</label>
            <input
              name="password2"
              type="password"
              autoComplete="new-password"
              required
              className="forgot-input"
              placeholder="Password, with at least 8 characters"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              minLength={8}
            />
          </div>
          <button type="submit" className="forgot-submit-btn">
            Submit
          </button>
        </form>
        {okMessage && <p className="success">{okMessage}</p>}
        {failMessage && <p className="error">⚠ {failMessage}</p>}
      </div>
    )
  );
};

export default RecoverPassword;
