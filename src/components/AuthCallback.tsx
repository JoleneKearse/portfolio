import { useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import { useNavigate } from "react-router-dom";

export const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      const url = new URL(window.location.href);
      const authCode = url.searchParams.get("code");
      if (authCode) {
        const { error } = await supabase.auth.exchangeCodeForSession(authCode);
        if (error) {
          console.error("Error exchanging code for session:", error);
        } else {
          navigate("/admin");
        }
      } else {
        console.error("No auth code found in the URL.");
      }
    };

    handleAuth();
  }, [navigate]);

  return <div>Loading...</div>;
};
