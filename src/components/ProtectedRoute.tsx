import { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(false);

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setIsAdmin(!!user);
    };
    checkAuth();
  }, []);

  if (isAdmin === null) {
    return <div>Loading...</div>;
  }
  return isAdmin ? children : <Navigate to="/login" />;
}
