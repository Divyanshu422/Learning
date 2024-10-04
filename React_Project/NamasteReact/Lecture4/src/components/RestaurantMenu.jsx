import React, { useState } from 'react'
import { useEffect } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/customHook/useRestaurantMenu'
function RestaurantMenu() {

    // const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams(); // Extract the 'id' parameter from the route
    console.log(resId)

    //* Creating the custom Hook in the Restaurant Menu -> passuing the resId

    const {resInfo, setResInfo} = useRestaurantMenu(resId);

    let imageId = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

     const { name } = resInfo?.data?.cards[2]?.card?.card?.info  || {};

     const data1 = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

     console.log(data1);
  return (resInfo==null)?(<Shimmer/>): (
        <div>
            <h1>The Restaurant which you have visited is:  {name}</h1>
      
            {/* <img src={imageId+cloudinaryImageId} alt='Loading image'/> */}
                {
                    data1?.map((item, index) => {
                        return (
                            <div key={index} style={{ height:"300px" , boder:"1px solid red"}}>
                                <img src={imageId + item?.card?.info?.imageId} style={{ width: "140px", height: "130px" }} alt="Item Image" />
                                <div style={{ display: "flex",  flexDirection: "column"}}>
                                    <h1>{item?.card?.info?.name}</h1>
                                </div>  
                            </div>
                        );
                    })
                }

        </div>
    )
}

export default RestaurantMenu;