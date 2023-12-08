import { useCallback } from "react";
import { currentUser, isAuthenticated } from "../App";

const useAuthentication = () => {
  // Authenticate user with access token
  const authenticate = useCallback(async (accessToken) => {
    try {
      const response = await fetch("/api/user/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // If access token is invalid, refresh token
      if (response.status === 401) {
        const { savedUser, accessToken } = await refreshToken(
          localStorage.getItem("refreshToken")
        );

        currentUser.value = savedUser;
        isAuthenticated.value = true;
        if (localStorage.getItem("googleLogin"))
          currentUser.value.googleLogin = localStorage.getItem("googleLogin");
        if (localStorage.getItem("picture"))
          currentUser.value.picture = localStorage.getItem("picture");
        localStorage.setItem("accessToken", accessToken);
      }

      const json = await response.json();

      if (response.ok) {
        currentUser.value = json.user;
        isAuthenticated.value = true;
        if (localStorage.getItem("googleLogin"))
          currentUser.value.googleLogin = localStorage.getItem("googleLogin");
        if (localStorage.getItem("picture"))
          currentUser.value.picture = localStorage.getItem("picture");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const refreshToken = async (refreshToken) => {
    try {
      const response = await fetch("/api/user/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${refreshToken}`,
        },
      });

      const json = await response.json();

      if (response.stats === 403) {
        console.log("refresh token expired");
        return;
      }

      if (response.ok) {
        return json;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { authenticate };
};

export default useAuthentication;
