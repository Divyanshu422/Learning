import React, { useState } from 'react'
import { useEffect } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
function RestaurantMenu() {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams(); // Extract the 'id' parameter from the route
    console.log(resId)
    // Assign -> null @ for string
    // const [name, setName] = useState("") 
    let imageId = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';
    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async () =>{
        // * https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=234875&catalog_qa=undefined&submitAction=ENTER
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}`);
        const response = await data.json();

        setResInfo(response);
    }
     const { name , cuisines, cloudinaryImageId } = resInfo?.data?.cards[2]?.card?.card?.info  || {};

     const data1 = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

     console.log(data1);
  return (resInfo==null)?(<Shimmer/>): (
        <div>
            <h1>{name}</h1>
            {/* <h2>{cuisines.join(", ")}</h2> */}
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