import React, { useState } from "react";
import { BiSolidDownArrowCircle } from "react-icons/bi";
import ItemListAccordianData from "./ItemListAccordianData";
function RestaurantAccordian({ data }) {
  // console.log(data);

  const [open, setOpen] = useState(false);
  let imageId =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="py-2">
      <div className="w-6/12  mx-auto">
        <div className="flex flex-col gap-1 py-4">
          <div
            className=" bg-[#ECDFCC] py-2 rounded-xl  px-4 flex text-xl font-semibold items-center justify-between cursor-pointer"
            onClick={() => setOpen((value) => !value)}
          >
            {data?.title} ({data.itemCards.length})
            <BiSolidDownArrowCircle className="ml-2 " />
          </div>
          {open && (
            <div className="w-11/12 mx-auto">
              <ItemListAccordianData data={data.itemCards} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RestaurantAccordian;
