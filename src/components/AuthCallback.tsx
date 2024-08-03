import { useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import { useNavigate } from "react-router-dom";

export const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      // Check if a session exists
      const session = supabase.auth.getSession();

      if (session) {
        // Session exists, navigate to the desired page
        navigate("/admin");
      } else {
        // Handle any session error, log it, and navigate to login
        console.error("Session not found. Redirecting to login.");
        navigate("/login");
      }
    };

    handleAuth();
  }, [navigate]);

  return <div>Loading...</div>;
};
