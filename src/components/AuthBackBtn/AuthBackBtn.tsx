
"use client";

import { useRouter } from "next/navigation";

const AuthBackBtn = () => {
  const router = useRouter()
  return (
    <div 
    className="absolute rounded-full text-white bg-main text-8xl p-1 top-5 right-8 cursor-pointer"
    onClick={() =>  router.back()}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </div>
  );
};

export default AuthBackBtn;
