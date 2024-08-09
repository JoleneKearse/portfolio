import { useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import { useNavigate } from "react-router-dom";

export const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      // const { data, error } = await supabase.auth.getSession();
      // console.log("Session:", data.session);

      // if (error) {
      //   console.error("Error fetching session:", error.message);
      //   navigate("/login");
      //   return;
      // }

      // if (data.session) {
      //   navigate("/admin");
      // } else {
      //   console.error("No session found. Redirecting to login.");
      //   navigate("/login");
      // }
      const urlParams = new URLSearchParams(window.location.hash.substring(1));

      const accessToken = urlParams.get("access_token");
      const refreshToken = urlParams.get("refresh_token");
      // const expiresIn = urlParams.get("expires_in");

      if (accessToken && refreshToken) {
        try {
          // const parsedExpiresIn = parseInt(expiresIn, 10);
          // if (isNaN(parsedExpiresIn)) {
          //   throw new Error("Invalid expires_in value");
          // }
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
            // expires_in: parsedExpiresIn,
          });

          if (error) {
            console.error("Error setting session:", error);
            navigate("/login");
          } else {
            // Redirect to the admin page after the session is set
            navigate("/admin");
          }
        } catch (err) {
          console.error("Unexpected error setting session:", err);
          navigate("/login");
        }
      } else {
        console.error("No access token found. Redirecting to login.");
        navigate("/login");
      }
    };

    checkSession();
  }, [navigate]);

  return <div>Loading AuthCallback...</div>;
};
