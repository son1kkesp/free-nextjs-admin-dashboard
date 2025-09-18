import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar Sesión | Emby Admin",
  description: "Accede a tu panel de administración Emby",
};

export default function SignIn() {
  return <SignInForm />;
}
