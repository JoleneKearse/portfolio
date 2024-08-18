import { Session, User, AuthError } from "@supabase/supabase-js";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "../services/supabaseClient";
import { OAuthResponse } from "../types/types";

type AuthContextType = {
  user: User | null;
  session: Session | null;
  signIn: () => Promise<{
    data: OAuthResponse | null;
    error: AuthError | null;
  }>;
  signOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        console.log("session onAuthStateChange: ", session);
        setSession(session);
        if (session) {
          console.log("Setting user: ", session.user);
          setUser(session.user);
        }
        setIsLoading(false);
      },
    );
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { skipBrowserRedirect: false },
    });
    console.log("data: ", data);
    console.log("error: ", error);

    if (error) {
      console.error("Error signing in with GitHub:", error.message);
    }
    return { data: data as OAuthResponse | null, error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
  };

  if (isLoading) {
    return <div>Loading AdminPage...</div>;
  }

  // logged session, because Vercel deployment fails otherwise
  console.log("Session: ", session);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
