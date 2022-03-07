import React, { useEffect, useState } from "react";

// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Search component UI and functionality
export const Search = () => {
  // Set state for search input
  const [search, setSearch] = useState("");

  // Handle text update by user input
  const handleSearchInput = (e) => setSearch(e.target.value);

  // Clear search bar
  const clearSearch = () => {
    setSearch("");
  };

  // When input is empty, bg transparant, when not empty, background offblack search
  useEffect(() => {
    const searchEl = document.getElementById("search");
    if (search === "") {
      searchEl.classList.remove("bg-offblack-search");
    } else {
      searchEl.classList.add("bg-offblack-search");
    }
  }, [search]);

  // When input is empty, hide clear buttion
  useEffect(() => {
    const clearEl = document.getElementById("clear");
    if (search !== "") {
      clearEl.classList.replace("hidden", "block");
    } else {
      clearEl.classList.replace("block", "hidden");
    }
  }, [search]);

  // Disables both searches if input is empty
  useEffect(() => {
    const googleSearchEl = document.getElementById("google-search");
    if (search !== "") {
      googleSearchEl.classList.replace(
        "pointer-events-none",
        "pointer-events-auto"
      );
    } else {
      googleSearchEl.classList.replace(
        "pointer-events-auto",
        "pointer-events-none"
      );
    }
  }, [search]);

  return (
    <div className="flex flex-col items-center gap-6 font-family-arial w-full">
      <div
        id="search"
        className="flex lg:w-1/4 px-4 items-center border border-offblack-search rounded-full h-12"
      >
        <FontAwesomeIcon
          className="text-offwhite-footer"
          icon={faMagnifyingGlass}
        />
        <input
          className="px-3 w-full bg-transparent text-offwhite-search input-outline-none"
          type="text"
          value={search}
          onChange={handleSearchInput}
        ></input>
        <button
          id="clear"
          type="button"
          onClick={clearSearch}
          className="hidden"
        >
          <FontAwesomeIcon
            className="text-offwhite-footer text-xl"
            icon={faXmark}
          />
        </button>
      </div>
      <div className="flex gap-4 text-offwhite-search text-sm">
        {/* Supply redirect to an actual google search */}
        <a
          id="google-search"
          href={`https://www.google.com/search?q=${search}`}
          className="bg-offblack-button py-2 px-4 rounded tracking-wide pointer-events-none"
        >
          Google Search
        </a>
        <p className="bg-offblack-button py-2 px-4 rounded tracking-wide pointer-events-none">
          I'm Feeling Lucky
        </p>
      </div>
    </div>
  );
};
