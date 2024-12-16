"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import { Home, FileText, Briefcase, Users } from "lucide-react";

const Menu = () => {
  const [activePage, setActivePage] = useState("Home"); // Set initial active page
  const router = useRouter(); // Initialize the router

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: FileText, label: "Resume", path: "/resume" },
    { icon: Briefcase, label: "Work", path: "/work" },
    { icon: Users, label: "Contact", path: "/contact" },
  ];

  const handleNavigation = (label, path) => {
    setActivePage(label); // Update active page
    router.push(path); // Navigate to the corresponding route
  };

  return (
    <div className="flex justify-center items-center bg-gray-50">
      <nav className="bg-white rounded-2xl border border-gray-200 p-2 shadow-lg inline-flex gap-3">
        {menuItems.map(({ icon: Icon, label, path }) => (
          <button
            key={label}
            onClick={() => handleNavigation(label, path)} // Navigate on click
            className={`flex flex-col items-center gap-1 px-6 py-2 rounded-2xl font-medium transition-all ${
              activePage === label
                ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-md"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            <Icon
              className={`w-5 h-5 ${
                activePage === label ? "text-white" : "text-gray-500"
              }`}
            />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
