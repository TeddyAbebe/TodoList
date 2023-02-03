import React from "react";
// import { Link } from "react-router-dom";
import { FiLayout, FiLayers, FiPlus, FiSearch, FiBell } from "react-icons/fi";

function AppBar() {
  return (
    <div className="hidden lg:flex flex-row w-full px-4 py-2 bg-secondary text-white justify-between items-center">
      <div className="flex flex-row gap-3">
        <div className="flex flex-row items-center gap-2">
          <FiLayout />
          <div>Dashboard</div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <FiLayers />
          <div>Collections</div>
        </div>
      </div>

      <div className="flex flex-row gap-4 items-center">
        <div className="w-6 h-6 flex flex-row justify-center items-center bg-pink rounded-md">
          <FiPlus />
        </div>
        <div className="flex flex-row items-center gap-2">
          <FiSearch />
        </div>
        <div className="flex flex-row items-center gap-2">
          <FiBell />
        </div>
        <div className="w-8 h-8 rounded-full bg-primary"></div>
      </div>
    </div>
  );
}

export default AppBar;
