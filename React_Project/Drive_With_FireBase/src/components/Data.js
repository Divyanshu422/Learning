import React from "react";
// Icons:
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListIcon from "@mui/icons-material/List";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Data() {
  return (
    <div className="flex-1">
      <div className="flex flex-row items-center justify-between border-b-[1px] border-stone-200 py-2">
        <div className="flex gap-4">
          <p>My drive</p>
          <ArrowDropDownIcon />
        </div>
        <div className="flex gap-4">
          <ListIcon />
          <InfoOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Data;
