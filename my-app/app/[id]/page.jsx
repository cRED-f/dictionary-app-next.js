"use client";

import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function page() {
  const { theme } = useTheme();
  const { id } = useParams();
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const timerId = setTimeout(async () => {
      try {
        const res = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    }, 1000);

    // Clear the timer if the component unmounts or the ID changes
    return () => clearTimeout(timerId);
  }, [id]);

  console.log(data[0]);
  return (
    <div className={`px-8  md:w-[50%] w-full md:mx-auto `}>
      <div className={`${theme === "dark" && "text-white"}`}>
        <div className="ansHeader my-6">
          <h1 className={`text-3xl font-extrabold `}>
            {data[0]?.word || <Skeleton />}
          </h1>

          <h1 className="text-2xl mt-2 text-orange-500">{data[0]?.phonetic}</h1>
        </div>
        {(data[0] &&
          data[0]?.meanings.map((meaning, index) => (
            <div key={index}>
              <div className="flex gap-4 items-center">
                <p className="text-2xl font-serif italic">
                  {" "}
                  {meaning.partOfSpeech}{" "}
                </p>{" "}
                <hr
                  className={`${
                    theme === "dark" ? " border-white" : "border-gray-800/50"
                  } w-full`}
                />
              </div>

              <div className="mt-3">
                <ol>
                  {meaning.definitions.map((def, index) => (
                    <li className="py-3" key={index}>
                      <p className="text-sm"> &#x2022; {def.definition}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))) || <Skeleton count={5} className="my-2 h-20 rounded-lg" />}
      </div>
      <div className="mt-2">
        <ol>
          <li className="py-3">
            <a
              href={data[0]?.sourceUrls[0]}
              className="text-sm text-orange-500"
            >
              {" "}
              {data[0]?.sourceUrls[0]}{" "}
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
