"use client";
import { useTheme } from "next-themes";

export default function About() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`${theme === "dark" && " text-white"} mt-6`}>
      <hr className={`md:w-[50%] md:mx-auto `} />
      <div className="w-full h-28 flex flex-col items-center">
        <h1 className="text-3xl font-serif py-4 italic typingAnimation">
          This app is created by
        </h1>
        <a
          href="https://github.com/cRED-f"
          className="text-indigo-600 font-mono"
        >
          Md. Fahim Islam
        </a>
      </div>
    </div>
  );
}
