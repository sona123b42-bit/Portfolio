"use client";
import { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handelClick() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        <Logo />
        <Navigation
          handelClick={handelClick}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </header>
  );
}
export default Header;
