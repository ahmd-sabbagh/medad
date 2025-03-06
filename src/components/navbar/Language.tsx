"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { setCookie } from "cookies-next/client";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import Menu from "../menu/Menu";

interface Props {
  locale: string;
}
const Language = ({ locale }: Props) => {
  const [openMenus, setOpenMenus] = useState(false);
  const router = useRouter();
  return (
    <div className="Language relative hidden lg:block">
      <button
        className="flex items-center gap-2 lang-btn"
        onClick={() => {
          setOpenMenus(!openMenus);
        }}
      >
        <span className="text-xl">
          {" "}
          {locale == "ar" ? "العربية" : "English"}
        </span>
        <span className="text-xl">
          <IoIosArrowDown />
        </span>
      </button>
      {openMenus && (
        <Menu>
          <button
            className="block w-full py-4 px-5  text-sm font-semibold bg-white rounded-2xl"
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

export default Language;
