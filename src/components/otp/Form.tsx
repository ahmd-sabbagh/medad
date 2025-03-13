"use client";
import "./style.css";
import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface OtpProps {
  query?: string;
}

let currentOTPIndex: number = 0;
const OtpForm: FC<OtpProps> = ({ query }: OtpProps) => {
  const t = useTranslations();
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOtp: string[] = [...otp];
    newOtp[currentOTPIndex] = value.substring(value.length - 1);
    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);

    setOtp(newOtp);
  };
  const handleOnKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndex = index;
    if (key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);
  // Time
  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
  };
  useEffect(() => {
    //interval
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    //interval
    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds]);
  // submit
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  // resend
  const resend = () => {};
  return (
    <>
      <form onSubmit={onSubmit} className="verify-otp mt-5 md:mt-8">
        <div className="flex items-center gap-2 justify-between">
          {otp.map((_, index) => {
            return (
              <input
                key={index}
                ref={index === activeOTPIndex ? inputRef : null}
                type="number"
                onChange={handleChange}
                onKeyDown={(e) => handleOnKeyDown(e, index)}
                className={`text-center ${error ? "valdiation-error" : ""}`}
                // className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
                value={otp[index]}
              />
            );
          })}
        </div>
        <button
          className={`bg-main flex-c font-medium md:text-xl text-white px-4 rounded-[18px] h-[60px] md:h-[70px] w-full mt-4 ${
            seconds > 0 || minutes > 0 ? "disable" : "active"
          }`}
          disabled={seconds > 0 || minutes > 0 || loading}
          type="submit"
        >
          {t("send")}
        </button>
      </form>
      <div className="flex items-center gap-1 justify-center mt-4">
        <button
          onClick={() => {
            resend();
            resendOTP();
          }}
          disabled={seconds > 0 || minutes > 0}
          type="submit"
          className={`${
            seconds > 0 || minutes > 0 ? "disable" : "active"
          }`}
        >
          {t("Resend the code")}
        </button>
        <p className="text-yellow">
          ( {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds})
        </p>
      </div>
    </>
  );
};

export default OtpForm;
