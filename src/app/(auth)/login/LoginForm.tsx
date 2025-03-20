"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import axios from "axios";
import Link from "next/link";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const LoginForm = () => {
  const t = useTranslations();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Check if token is valid on page load
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/check`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.status) {
          router.push("/"); // Redirect if token is valid
        }
      } catch (err) {
        console.error("Token is invalid, user needs to log in.");
        localStorage.removeItem("token"); // Remove invalid token
      }
    };

    checkAuth();
  }, [router]);

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`, {
        email,
        password,
      });

      if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
        router.push("/"); // Redirect after successful login
      }
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="mt-4 md:mt-12 flex flex-col gap-4" onSubmit={handleLogin}>
      {/* Email Input */}
      <div className="relative bg-main-20 text-main rounded-[18px] h-[50px]">
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("Email Address")}
          className="w-full px-5 h-full bg-input pr-12 text-bolder rounded-[18px] focus:outline-none"
          required
        />
      </div>

      {/* Password Input */}
      <div className="relative bg-main-20 text-main rounded-[18px] h-[50px]">
        <input
          type={showPass ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t("password")}
          className="w-full px-5 h-full bg-input pr-12 text-bolder rounded-[18px] focus:outline-none"
          required
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-main"
          onClick={() => setShowPass(!showPass)}
        >
          {showPass ? <FaEyeSlash /> : <FaRegEye />}
        </button>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Login Button */}
      <button
        type="submit"
        className="mt-4 bg-main flex items-center justify-center font-medium md:text-xl text-white px-4 rounded-[8px] h-[40px]"
        disabled={loading}
      >
        {loading ? t("loading") : t("login")}
      </button>

      {/* Register Link */}
      <div className="flex items-center justify-center gap-1 my-8">
        <span>{t("no_have_acc")}</span>
        <Link href="/register" className="text-main">
          {t("register")}
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
