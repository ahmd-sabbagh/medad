"use client";

import { useTranslations } from "next-intl";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const t = useTranslations();
  const formRef = useRef<HTMLFormElement>(null); // Reference to the form

  const handleContactUs = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json(); // Parse JSON response

      if (response.ok) {
        toast.success(result.message || "Message sent successfully!");
        formRef.current?.reset(); // Reset the form
      } else {
        toast.error(result.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form ref={formRef} onSubmit={handleContactUs} className="mt-10 md:mt-20 md:max-w-[85%] lg:max-w-[70%] mx-auto">
      <div className="grid md:grid-cols-5 gap-5">
        <input
          type="text"
          name="name"
          placeholder={t("the name")}
          className="rounded-[10px] px-5 md:px-8 py-3 bg-[#F0F0F0] md:col-span-2 text-black placeholder-black"
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t("email")}
          className="rounded-[10px] px-5 py-3 md:px-8 bg-[#F0F0F0] md:col-span-3 text-black placeholder-black"
          required
        />
        <textarea
          name="message"
          className="h-[200px] md:h-[355px] rounded-[10px] p-5 md:p-8 bg-[#F0F0F0] md:col-span-5 text-black placeholder-black"
          placeholder={t("the text")}
          required
        ></textarea>
        <button type="submit" className="md:col-span-5 rounded-[10px] w-full bg-main text-center text-xl font-bolder py-3 cursor-pointer">
          {t("send")}
        </button>
      </div>
      <Toaster />
    </form>
  );
};

export default Form;
