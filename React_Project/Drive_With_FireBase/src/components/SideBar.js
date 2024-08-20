import React from "react";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import DevicesIcon from "@mui/icons-material/Devices";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";

const SideBarData = [
  {
    id: 1,
    name: "My Drive",
    icons: <MobileScreenShareIcon />,
  },
  {
    id: 2,
    name: "Computers",
    icons: <DevicesIcon />,
  },
  {
    id: 3,
    name: "Shared with me",
    icons: <PeopleAltOutlinedIcon />,
  },
  {
    id: 4,
    name: "Recent",
    icons: <QueryBuilderOutlinedIcon />,
  },
  {
    id: 5,
    name: "Starred",
    icons: <StarBorderOutlinedIcon />,
  },
  {
    id: 6,
    name: "Trash",
    icons: <DeleteOutlineOutlinedIcon />,
  },
  {
    id: 7,
    name: "Separator", // Empty name for the separator
    icons: "null",
  },
  {
    id: 8,
    name: "Storage",
    icons: <CloudQueueOutlinedIcon />,
  },
];

function SideBar() {
  return (
    <div className="sideBar pl-5 pt-4 pr-4  border-r-2">
      <div className="sideBar_btn mb-4">
        <button className="bg-[#e2e0e0] px-4 py-2 rounded-full">
          <span>+ New</span>
        </button>
      </div>
      <div>
        {SideBarData.map((item) =>
          item.name === "Separator" ? (
            <hr key={item.id} className="border-t border-gray-300 my-2" />
          ) : (
            <div
              key={item.id}
              className="flex items-center mb-4 hover:cursor-pointer"
            >
              <span className="mr-4">{item.icons}</span>
              <span>{item.name}</span>
            </div>
          )
        )}
      </div>
      <div>{/* <progress value="50" /> */}</div>
    </div>
  );
}

export default SideBar;
