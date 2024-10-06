import React from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/customHook/useRestaurantMenu';
import Shimmer from './Shimmer';

function RestaurantMenu() {
    const { resId } = useParams(); // Extract the 'id' parameter from the route
    const { resInfo } = useRestaurantMenu(resId);

    let imageId = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';
    const { name } = resInfo?.data?.cards[2]?.card?.card?.info || {};
    const data1 = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    return (resInfo == null) ? (
        <Shimmer />
    ) : (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">The Restaurant you have visited is: {name}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    data1?.map((item, index) => {
                        return (
                            <div key={index} className="border border-red-500 rounded-lg p-4 flex flex-col items-center">
                                <img 
                                    src={imageId + item?.card?.info?.imageId} 
                                    className="w-36 h-32 object-cover mb-2" 
                                    alt="Item Image" 
                                />
                                <h1 className="text-lg font-semibold">{item?.card?.info?.name}</h1>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default RestaurantMenu;