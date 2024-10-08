import React from "react";

function ItemListAccordianData({ data }) {
  //   console.log(data);
  let imageId =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="flex flex-col space-y-4">
      {data?.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="border-b-2 border-gray-300  p-4 flex justify-between items-center"
          >
            <div className="flex flex-col w-9/12">
              <p className="text-sm font-semibold">{item?.card?.info?.name}</p>
              <p className="text-gray-500">
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </p>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 relative">
              <img
                src={imageId + item?.card?.info?.imageId}
                className="object-cover rounded-lg"
                alt="Item Image"
              />
              <button className="absolute w-[2/4] bg-white text-green-600 shadow-2xl px-4 py-2 text-sm font-bold rounded-xl -bottom-4 left-6 ">
                ADD +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ItemListAccordianData;
