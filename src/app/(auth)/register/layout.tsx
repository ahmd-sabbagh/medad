import AuthShape from "@/components/authShape/AuthShape";
import Haed from "./Haed";
import { register_img } from "@/assets";
import AuthBackBtn from "@/components/AuthBackBtn/AuthBackBtn";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthShape image={register_img}>
      <section className="mt-[200px] md:mt-0 grow flex-c">
      <AuthBackBtn/>
        <div className="container">
          <div className="grid md:grid-cols-2 md:gap-20">
            <div>
              {children}
            </div>
          </div>
        </div>
      </section>
    </AuthShape>
  );
}
