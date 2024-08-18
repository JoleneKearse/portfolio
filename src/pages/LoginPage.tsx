import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { FaGithub } from "react-icons/fa6";
import Jolene from "/jolene.webp";
import { useAuth } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const {user, signIn } = useAuth();
  const navigate = useNavigate();
  const handleLogin = async () => {
    const { error } = await signIn();

    if (error) {
      alert("An error occurred during sign in: " + error.message);
      return;
    }
    
    if (user) {
      navigate("/admin");
    }
  }

  return (
    <section className="space-y-6">
      <Heading text="Login" />
      <div className="flex justifty-between">
        <div className="space-y-6">
          <p>Are you sure you're Jolene Kearse, the most awesome Software Engineer?</p>
          <p>You better login to verify your identity!</p>
        </div>
        <img src={Jolene} alt="me" className="size-28" />
      </div>
      <Button text="Login with GitHub" icon={<FaGithub />} onClick={handleLogin} />
    </section>
  );
}