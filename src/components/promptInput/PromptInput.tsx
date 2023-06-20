"use client";
import { DropdownLogoSVG, SendLogoSVG } from "@aladaii/public/promptField";
import React, { useState } from "react";

const options = [
  "Modern Computer Animation",
  "realistic",
  "Digital Art",
  "3D",
  "2D",
  "3D Animation",
  "2D Animation",
  "3D Modeling",
  "2D Modeling",
  "3D Rendering",
  "2D Rendering",
  "3D Rigging",
  "2D Rigging",
  "3D Texturing",
  "2D Texturing",
  "3D Lighting",
  "2D Lighting",
  "3D Shading",
  "2D Shading",
  "3D Compositing",
  "2D Compositing",
  "3D Rendering",
  "2D Rendering",
  "3D Rendering",
];

const PromptInput = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(
    "Modern Computer Animation"
  );

  const handleSubmit = () => {
    console.log(prompt);
  };

  console.log(isSelectOpen);

  return (
    <div className="relative">
      <textarea
        id="default-search"
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
        className="block h-[74px] w-[58vw] resize-none rounded-xl border-[4px] p-4 pl-10 pt-6 text-sm text-gray-900 shadow-lg outline-none focus:border-transparent focus:ring-transparent dark:border-input-border dark:bg-input-bg dark:text-white dark:placeholder-gray-400 dark:focus:border-transparent dark:focus:ring-transparent"
        placeholder="Enter your prompt..."
        required
      />
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={prompt === ""}
        className={`absolute bottom-5 right-2.5 rounded-lg bg-blue-700 p-2 text-sm font-medium text-white transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 ${
          prompt === "" ? "dark:bg-white/10" : "dark:bg-white"
        } dark:focus:ring-0`}
      >
        <SendLogoSVG />
      </button>
      <div className={`absolute bottom-5 right-20`}>
        <div
          className={`${
            isSelectOpen ? "" : "hidden"
          } mb-5 h-[20rem] w-full rounded-xl border-2 border-[#27292A]/90 bg-white/5 pt-4 backdrop-blur`}
        >
          <ul className="custom-scrollbar h-full w-full overflow-y-scroll">
            {options.map((option, id) => (
              <li
                key={id}
                className="flex items-center gap-x-3 p-2 text-white transition-colors hover:bg-white/10"
                onClick={() => {
                  setSelectedOption(option);
                  setIsSelectOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          onClick={() => setIsSelectOpen((e) => !e)}
          className={`flex w-[235.41px] items-center justify-between gap-x-3 rounded-lg bg-blue-700 p-2 text-sm font-medium text-white transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 ${
            prompt === "" ? "dark:bg-white/10" : "dark:bg-white"
          } dark:focus:ring-0`}
        >
          <span className="text-sm font-medium text-white">
            {selectedOption}
          </span>
          <div
            className={`${
              isSelectOpen ? "" : "rotate-180"
            } transition-transform`}
          >
            <DropdownLogoSVG />
          </div>
        </button>
      </div>
    </div>
  );
};

export default PromptInput;
