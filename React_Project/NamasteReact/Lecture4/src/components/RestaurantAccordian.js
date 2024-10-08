import React from "react";

function RestaurantAccordian({ data1 }) {
  let imageId =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data1?.map((item, index) => {
        return (
          <div
            key={index}
            className="border border-red-500 rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={imageId + item?.card?.info?.imageId}
              className="w-36 h-32 object-cover mb-2"
              alt="Item Image"
            />
            <h1 className="text-lg font-semibold">{item?.card?.info?.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantAccordian;
