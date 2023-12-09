import "./ForgotPassword.css";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useRecoverPassword from "../../hooks/useRecoverPassword";

const InputEmail = () => {
  const navigate = useNavigate();
  const { email, setEmail, okMessage, failMessage, createUrl } =
    useRecoverPassword();

  return (
    <form
      className="form forgot-password-container"
      onSubmit={(e) => {
        e.preventDefault();
        createUrl(email);
      }}
    >
      <IoIosClose
        className="checkout-template-close"
        onClick={() => navigate("/")}
      />
      <h2>Recover your password</h2>
      <div className="forgot-pw-form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          className="forgot-input"
          placeholder="Enter your email"
        />
      </div>
      <button type="submit" className="forgot-submit-btn">
        Submit
      </button>
      <p>
        An email containing a link to recover your password will be sent to the
        provided email address.
      </p>
      {okMessage && <p className="success">{okMessage}</p>}
      {failMessage && <p className="error">⚠ {failMessage}</p>}
    </form>
  );
};

export default InputEmail;
