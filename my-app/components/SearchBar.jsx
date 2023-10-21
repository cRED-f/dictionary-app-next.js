"use client";

import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiBookBookmark } from "react-icons/bi";
import { BsMoonStars } from "react-icons/bs";

import { useTheme } from "next-themes";
import Link from "next/link";

export default function searchBar() {
  const { theme, setTheme } = useTheme();
  const [search, setSearch] = React.useState("");
  //toggle the theme
  const handleToggleBar = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`h-full `}>
      <div className=" flex flex-col items-center">
        <div className="headerIcon flex justify-between   md:w-[50%] ">
          <Link href={"/"} className="p-8 flex items-center ">
            {" "}
            <BiBookBookmark className="w-14 h-14 text-orange-500  " />{" "}
            <h1
              className={`text-3xl font-extrabold ${
                theme && theme === "dark"
                  ? "text-orange-500"
                  : "text-gray-800/50 "
              }`}
            >
              Dictonary
            </h1>
          </Link>
          <div className="flex gap-2 items-center m-8">
            <input
              type="checkbox"
              className="toggle"
              onClick={handleToggleBar}
            />
            <BsMoonStars className="w-4 text-orange-500" />
          </div>
        </div>
        <div className="searchBTN ">
          <div className="flex">
            {" "}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={` rounded-3xl bg-gray-300/50 shadow-lg  py-4 px-16 md:px-60  outline-orange-500 
                placeholder:text-sm ${
                  theme === "dark"
                    ? " placeholder:text-orange-500 text-orange-500"
                    : "placeholder:text-black placeholder:text-gray-600/50"
                } `}
              placeholder="Search any word here..."
            />
            <Link href={`/${search}`}>
              {" "}
              <BiSearchAlt2 className="text-2xl relative right-9 mt-4 text-orange-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="flex justify-center bg-red-200">
<div className="flex  mt-5 justify-around bg-slate-900   w-full md:w-[50%]  items-center   h-fit">
  <BiBookBookmark className="w-8 h-8 text-orange-500 shadow-lg" />{" "}
  <div className="flex gap-2">
    <input
      type="checkbox"
      className="toggle"
      onClick={handleToggleBar}
    />
    <BsMoonStars className="w-4 text-orange-500" />
  </div>
</div>
</div>
<AnswerComp /> */
}
{
  /* <div className="flex">
{" "}
<input
  className={` rounded-lg bg-gray-300/50 shadow-lg  py-2 px-6 md:px-40  outline-orange-500   placeholder:text-sm `}
  placeholder="Search any word here..."
/>
<BiSearchAlt2 className="text-2xl relative right-9 mt-2 text-orange-500" />
</div> */
}
