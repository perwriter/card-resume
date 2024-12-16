import React from "react";
import { Moon } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full flex justify-center">
      {/* Container to center and limit the width */}
      <header className="flex justify-between items-center w-full max-w-7xl px-6 py-4 bg-white shadow-md">
        {/* Left Section - Logo */}
        <div
          className="text-2xl font-bold italic"
          style={{ fontFamily: "'Playwrite DE VA Guides', sans-serif", color: "#FFA500" }}
        >
          Kimiri Peter
        </div>

        {/* Right Section - Theme Toggle */}
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
          <Moon size={20} className="text-gray-700" />
        </div>
      </header>
    </div>
  );
};

export default Header;
