import AuthShape from "@/components/authShape/AuthShape";
import React from "react";
import { register_img } from "@/assets";
import Otp from "@/components/otp/Otp";

const VerifyPage = () => {
  return (
    <AuthShape image={register_img}>
      <section className="mt-[200px] md:mt-0 grow flex-c">
        <div className="container">
          <div className="grid md:grid-cols-2 md:gap-20">
            <div>
              <Otp />
            </div>
          </div>
        </div>
      </section>
    </AuthShape>
  );
};

export default VerifyPage;
