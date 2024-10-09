import React, { useState } from "react";
import { BiSolidDownArrowCircle } from "react-icons/bi";
import ItemListAccordianData from "./ItemListAccordianData";
function RestaurantAccordian({ data, open, setTrackIndex, index }) {
  let imageId =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="py-2">
      <div className="w-6/12  mx-auto">
        <div className="flex flex-col gap-1 py-4">
          <div
            className=" bg-[#ECDFCC] py-2 rounded-xl  px-4 flex text-xl font-semibold items-center justify-between cursor-pointer"
            onClick={() => setTrackIndex(index)}
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
