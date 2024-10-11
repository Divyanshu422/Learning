import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../Redux/cartSlice";

function Cart() {
  const itemList = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState(0); // State to store subtotal
  let imageId =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  // Calculate subtotal whenever itemList changes
  useEffect(() => {
    const total = itemList.reduce((total, item) => {
      return total + (item?.card?.info?.price || 0);
    }, 0);
    setSubtotal(total); // Update subtotal state
  }, [itemList]); // Dependency array ensures recalculation when itemList changes

  return (
    <div className="h-screen w-full mx-auto flex flex-col items-center justify-start py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Order Summary</h1>
      <button
        className="bg-slate-700 text-white mb-4 py-2 px-4 rounded-lg"
        onClick={() => {
          dispatch(clearItem());
        }}
      >
        Empty Cart
      </button>
      {itemList.length === 0 && <h1>The cart is empty, please add something</h1>}

      <div className="w-8/12 flex flex-col gap-6">
        {itemList.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center bg-white shadow-lg rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <p className="text-2xl font-semibold text-gray-700 w-7/12">
                {item?.card?.info?.name}
              </p>

              <div className="w-4/12 flex justify-end">
                <img
                  src={imageId + item?.card?.info?.imageId}
                  className="object-cover rounded-lg w-3/6"
                  alt="Item"
                />
              </div>
            </div>
          );
        })}
      </div>
      <hr></hr>
      <div className="py-3 text-xl">
        Subtotal: ₹{(subtotal / 100).toFixed(2)} {/* Convert paise to rupees */}
      </div>
    </div>
  );
}

export default Cart;