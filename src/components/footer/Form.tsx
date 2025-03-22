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
    <div className="max-w-[369px] mx-auto md:mx-0">
      <form ref={formRef} onSubmit={handleContactUs} className="grid grid-cols-3 gap-2">
        <input
          type="text"
          name="name"
          className="rounded-[5px] text-white bg-[#FFFFFF33] col-span-1 px-3 py-2"
          placeholder={t("the name")}
          required
        />
        <input
          type="email"
          name="email"
          className="rounded-[5px] text-white bg-[#FFFFFF33] col-span-2 px-3 py-2"
          placeholder={t("email")}
          required
        />
        <textarea
          name="message"
          placeholder={t("the text")}
          className="bg-[#FFFFFF33] rounded-[5px] text-white col-span-3 h-[125px] px-3"
          required
        ></textarea>
        <div className="flex justify-end col-span-3">
          <button type="submit" className="rounded-[5px] text-white py-0 px-8 bg-[#EA9300] text-lg cursor-pointer">
            {t("send")}
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Form;
