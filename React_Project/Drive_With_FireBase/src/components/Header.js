import React from "react";
import Logo from "../assets/GoogleDrive.png";
import SearchIcon from "@mui/icons-material/Search";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";

function Header() {
  return (
    <div className="grid grid-cols-4 items-center px-5 h-20 border-b border-stone-900/15">
      {/* Logo Section */}
      <div className="flex items-center col-span-1">
        <img src={Logo} alt="Drive Logo" className="w-12 px-2" />
        <span className="text-xl text-gray-950">Drive</span>
      </div>
      {/* Search Section */}
      <div className="flex items-center bg-[#F5F5F5] p-3 rounded-md col-span-2">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search in Drive"
          className="flex-1 bg-transparent outline-none px-2"
        />
        <FormatAlignCenterIcon />
      </div>
      {/* Header Options */}
      <div className="flex items-center justify-end col-span-1 gap-5">
        <HelpIcon />
        <SettingsIcon />
        <AppsIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
