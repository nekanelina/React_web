import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loginSuccessMessage } from "../components/Header/Login";
import { loginDropdownActive } from "../components/Header";

const useRecoverPassword = () => {
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [okMessage, setOkMessage] = useState("");
  const [failMessage, setFailmessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const createUrl = async (email) => {
    setOkMessage("");
    setFailmessage("");
    const response = await fetch("/api/user/recover-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.status === 200) {
      setOkMessage("Email sent");
    } else {
      setFailmessage("Error sending email");
    }
  };

  const checkForUrl = async () => {
    const response = await fetch(`/api/user${location.pathname}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      setIsValidUrl(true);
    } else {
      setIsValidUrl(false);
    }
  };

  const updatePassword = async (password, password2) => {
    setOkMessage("");
    setFailmessage("");
    if (password !== password2) {
      setFailmessage("Passwords do not match");
      return;
    }

    const response = await fetch(`/api/user${location.pathname}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });
    

    if (response.status === 400) {
      const data = await response.json();
      setFailmessage(data.message);
      return;
    }

    if (response.status === 200) {
      loginSuccessMessage.value = "Password updated successfully";
      setTimeout(() => {
        loginSuccessMessage.value = "";
      }, 3000);
      loginDropdownActive.value = true;
      setOkMessage("");
      setFailmessage("");
      navigate("/");
    } else {
      setIsValidUrl(false);
      setFailmessage("Error updating password");
    }
  };
  return {
    isValidUrl,
    checkForUrl,
    createUrl,
    updatePassword,
    okMessage,
    failMessage,
    email,
    setEmail,
    password,
    confirmPassword,
    setPassword,
    setConfirmPassword,
  };
};

export default useRecoverPassword;
