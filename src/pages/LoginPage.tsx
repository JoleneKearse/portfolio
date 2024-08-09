import { supabase } from "../services/supabaseClient";
import { Navigate } from "react-router-dom";

import { FaGithub } from "react-icons/fa6";

export const LoginPage = () => {
  console.log("Reached LoginPage");
  const handleGithubLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "https://ffgnpehvawdrfattmzme.supabase.co/auth/v1/callback*",
      },
    });
    console.log(data.url);
    if (error) {
      console.error(error);
      alert("Failed to login with GitHub");
    } else {
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.log("No URL returned, manually redirecting.");
        window.location.href = "http://127.0.0.1:5173/admin";
      }
      return <Navigate to="/admin" />
    }
  };

  return (
    <button
      onClick={handleGithubLogin}
      className="my-20 flex h-full w-full items-center justify-center gap-6 text-purple-500"
    >
      Login via Github <FaGithub />
    </button>
  );
};
