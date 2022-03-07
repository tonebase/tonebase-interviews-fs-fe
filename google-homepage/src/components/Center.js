import React from "react";

// Component imports
import { Search } from "./Search";

// Component that holds main center container
export const Center = ({ logo }) => {
  return (
    <section className="-mt-28 flex flex-col items-center gap-6">
      <img className="max-h-24" alt="google logo" src={logo}></img>
      <Search />
    </section>
  );
};
