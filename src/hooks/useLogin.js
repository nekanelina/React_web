import {
  isLoading,
  email,
  password,
  loginError,
  registerPageActive,
} from "../components/Header/Login/Login.jsx";
import { loginDropdownActive } from "../components/Header/Header.jsx";
import { registerError } from "../components/Register/index.js";
import { currentUser } from "../App.js";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const useLogin = () => {
  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      });

      const json = await response.json();

      if (response.status !== 200) {
        loginError.value = json.message;
        isLoading.value = false;
        return;
      }

      if (response.ok) {
        currentUser.value = json.user;
        localStorage.setItem("accessToken", json.accessToken);
        localStorage.setItem("refreshToken", json.refreshToken);
        email.value = "";
        password.value = "";
        loginDropdownActive.value = false;
        navigate("/");
      }
    } catch (error) {
      loginError.value = "⚠ Something went wrong. Please try again later.";
    }
  };
  isLoading.value = false;

  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        const googleData = res.data;

        if (res.status === 200) {
          const res2 = await fetch("/api/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: googleData.email,
              googleLogin: true,
            }),
          });
          if (res2.status === 404) {
            loginDropdownActive.value = false;
            registerError.value = "No account found. Please register.";
            setTimeout(() => {
              registerError.value = "";
            }, 10000);
            registerPageActive.value = true;
            navigate("/register");
            return;
          }

          if (res2.ok) {
            const userData = await res2.json();
            console.log(userData);
            currentUser.value = userData.user;
            currentUser.value.picture = googleData.picture;
            currentUser.value.googleLogin = true;
            localStorage.setItem("googleLogin", true);
            localStorage.setItem("picture", googleData.picture);
            localStorage.setItem("accessToken", userData.accessToken);
            localStorage.setItem("refreshToken", userData.refreshToken);
            email.value = "";
            password.value = "";
            loginDropdownActive.value = false;
            navigate("/");
          }
        }
      } catch (error) {
        loginError.value = "⚠ Error login with Google";
      }
    },
  });

  return { login, googleLogin };
};

export default useLogin;
