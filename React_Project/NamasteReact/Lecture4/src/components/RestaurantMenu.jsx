import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/customHook/useRestaurantMenu';
import Shimmer from './Shimmer';
import RestaurantAccordian from './RestaurantAccordian';
function RestaurantMenu() {
    const { resId } = useParams(); // Extract the 'id' parameter from the route
    const { resInfo } = useRestaurantMenu(resId);
    // Creating the variable which will track the state of accordian -> i.e. which accordian to open and it closes all other accordian
    const [trackIndex, setTrackIndex]= useState('');
    // let imageId = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';
    const { name } = resInfo?.data?.cards[2]?.card?.card?.info || {};
    const titleData = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>item?.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    const cuisines = resInfo?.data?.cards[2]?.card?.card?.info?.cuisines;
    // console.log('the value of index', trackIndex)

    return (resInfo == null) ? (
        <Shimmer />
    ) : (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-center text-gray-700">{name}</h1>
            <h1 className="text-lg font-sm text-center text-gray-700 py-4">{cuisines}</h1>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
            <div>
                {   
                    titleData?.map((item, index) => {
                        return (
                            <div key={index}>
                                {/* <h1 className='text-center text-2xl font-bold text-red-800'>{item?.card?.card?.title/itemCards}</h1> */}
                                <RestaurantAccordian data={item?.card?.card} open={index ===trackIndex? true: false} setTrackIndex={setTrackIndex} index={index}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default RestaurantMenu;


/*
      <h1 className='text-center text-2xl font-bold text-red-800'>{item?.card?.card?.title}</h1>
                                <RestaurantAccordian data1={item?.card?.card?.itemCards}/>'


*/


