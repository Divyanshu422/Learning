import React from 'react'
import { useEffect, useState } from 'react';
function useRestaurantMenu(resId) {

    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async () =>{
        // * https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=234875&catalog_qa=undefined&submitAction=ENTER
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}`);
        const response = await data.json();

        setResInfo(response);
    }
    return {resInfo, setResInfo}
}

export default useRestaurantMenu