import React from "react";

// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Header component
export const Header = () => {
  return (
    <header className="py-3 px-6">
      <nav className="flex justify-between items-center text-sm">
        <ul className="flex gap-5 text-offwhite-header font-family-arial">
          <li>
            <a
              className="hover:underline"
              href="https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              href="https://store.google.com/US?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US"
            >
              Store
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-6 text-white">
          <ul className="flex gap-4 font-family-roboto">
            <li>
              <a
                className="hover:underline"
                href="https://mail.google.com/mail/?authuser=0&ogbl"
              >
                Gmail
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://www.google.com/imghp?hl=en&authuser=0&ogbl"
              >
                Images
              </a>
            </li>
          </ul>
          <ul className="flex gap-6 items-center">
            <li
              id="grid"
              className="p-3 rounded-full flex items-center justify-center"
            >
              <FontAwesomeIcon className="text-xl" icon={faGrip} />
            </li>
            <li>
              <a
                href="https://github.com/CJPohl"
                className="bg-green-600 rounded-full flex items-center justify-center h-8 w-8 hover:shadow hover:shadow-stone-400"
              >
                <FontAwesomeIcon className="text-xl" icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
