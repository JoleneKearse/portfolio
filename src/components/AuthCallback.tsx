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
        navigate("/login");
        return;
      }

      if (data.session) {
        navigate("/admin");
      } else {
        console.error("No session found. Redirecting to login.");
        navigate("/login");
      }
    };

    checkSession();
  }, [navigate]);

  return <div>Loading...</div>;
};
