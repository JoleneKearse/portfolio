import { supabase } from "../services/supabaseClient";

import { FaGithub } from "react-icons/fa6";

export const LoginPage = () => {
  const handleGithubLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "https://jolenekearse.dev/admin",
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
