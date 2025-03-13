"use client";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { setCookie } from "cookies-next/client";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import Menu from "../menu/Menu";

interface Props {
  locale: string;
}
const AuthLanguage = ({ locale }: Props) => {
  const [openMenus, setOpenMenus] = useState(false);
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menuUserHandler = (e: any) => {
      if (
        !buttonRef?.current?.contains(e.target) &&
        !menuRef?.current?.contains(e.target)
      ) {
        setOpenMenus(false);
      }
    };
    document.addEventListener("mousedown", menuUserHandler);
    return () => {
      document.removeEventListener("mousedown", menuUserHandler);
    };
  }, []);
  return (
    <div className="Language relative  w-fit">
      <button
        ref={buttonRef}
        className="flex items-center gap-2 lang-btn"
        onClick={() => {
          setOpenMenus(!openMenus);
        }}
      >
        <span className="text-sm md:text-xl">
          {" "}
          {locale == "ar" ? "العربية" : "English"}
        </span>
        <span className="text-xl">
          <IoIosArrowDown />
        </span>
      </button>
      {openMenus && (
        <Menu ref={menuRef}>
          <button
            className="block w-full py-4 px-5  text-sm font-semibold bg-white rounded-2xl text-black"
            onClick={() => {
              locale == "ar"
                ? setCookie("NEXT_LOCALE", "en")
                : setCookie("NEXT_LOCALE", "ar");
              router.refresh();
              setOpenMenus(!openMenus);
            }}
          >
            {locale == "ar" ? (
              <span className="block text-end">English</span>
            ) : (
              <span className="text-end block">العربية</span>
            )}
          </button>
        </Menu>
      )}
    </div>
  );
};

export default AuthLanguage;
