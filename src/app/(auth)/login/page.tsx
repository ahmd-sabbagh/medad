import AuthShape from "@/components/authShape/AuthShape";
import React from "react";
import Haed from "./Haed";
import LoginForm from "./LoginForm";
import { login_shape } from "@/assets";
import AuthBackBtn from "@/components/AuthBackBtn/AuthBackBtn";



const LoginPage = () => {

  return (
    <AuthShape image={login_shape}>
      <section className="mt-[350px] md:mt-0 grow flex-c">
        <AuthBackBtn/>
        <div className="container">
          <div className="grid md:grid-cols-2 md:gap-20">
            <div>
              <Haed />
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </AuthShape>
  );
};

export default LoginPage;
