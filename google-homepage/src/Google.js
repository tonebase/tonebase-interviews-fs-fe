import React from "react";

// Component imports
import { Header } from "./components/Header";
import { Center } from "./components/Center";
import { Footer } from "./components/Footer";

/// MEDIA IMPORTS ///

// Images //
import googleLogo from "./media/images/google-logo.png";

// Holds main google app component
export const Google = () => {
  return (
    <div className="h-screen grid grid-rows-3">
      <Header />
      <Center logo={googleLogo} />
      <Footer />
    </div>
  );
};
