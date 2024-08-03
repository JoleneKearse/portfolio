import { supabase } from "../services/supabaseClient";

import { FaGithub } from "react-icons/fa6";

export const LoginPage = () => {
  const handleGithubLogin = async () => {
    const state = Math.random().toString(36).substring(7);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "https://ffgnpehvawdrfattmzme.supabase.co/auth/v1/callback",
        queryParams: {
          state,
        },
      },
    });
    if (error) {
      console.error(error);
      alert("Failed to login with GitHub");
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
