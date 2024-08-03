import { useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import { useNavigate } from "react-router-dom";

export const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error fetching session:", error.message);
        // Handle session error
        navigate("/login");
        return;
      }

      if (data.session) {
        // Session exists, navigate to the desired page
        navigate("/admin");
      } else {
        // No session, redirect to login
        console.error("No session found. Redirecting to login.");
        navigate("/login");
      }
    };

    checkSession();
  }, [navigate]);

  return <div>Loading...</div>;
};
