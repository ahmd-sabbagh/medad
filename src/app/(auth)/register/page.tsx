"use client";
import Button from "@/components/button/Button";
import DropDownMenu from "@/components/dropDownMenu/DropDownMenu";
import { useTranslations } from "next-intl";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Haed from "./Haed";
import Step1 from "./Step1";
import Step2 from "./Step2";

const RegisterPage = () => {
  const t = useTranslations();
  const [step,setStep] = useState(1);
  return (
    <>
    <Haed setStep={setStep} step={step} />
    {step == 1 ? (<Step1 setStep={setStep}/>) : (<Step2 setStep={setStep}/>)}
    </>
  );
};

export default RegisterPage;
