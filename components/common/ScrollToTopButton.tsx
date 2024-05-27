"use client";

import { twMerge } from "tailwind-merge";
import UpArrowSVG from "@/public/icons/up-arrow.svg";
import WhatsappSVG from "@/public/icons/whatsapp.svg";
import { useEffect, useState } from "react";

const ScrollToTopButton = ({ className }: { className?: string }) => {
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    });
  }, []);

  return (
    <div className="flex flex-col gap-y-2">
      <a
        href="https://wa.me/2348100000000"
        target="_blank"
        rel="noopener noreferrer"
        className={twMerge(
          "fixed  bottom-[74px] right-3 rounded-full border border-white bg-white p-1 shadow-lg shadow-[#57B752]",
          "z-50 animate-bounce cursor-pointer",
          !status && "bottom-4",
          className,
        )}
      >
        <WhatsappSVG className="h-10 w-10" />
      </a>
      {status && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={twMerge(
            "fixed  bottom-4 right-3 rounded-full bg-white p-2 shadow-lg shadow-red-500",
            "z-50 cursor-pointer",
            className,
          )}
        >
          <UpArrowSVG className="h-8 w-8 animate-bounce" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
