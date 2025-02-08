import { useEffect, useState } from "react"

const useRestaurentInfo=(id)=>{

    const [resInfo,setResInfo]=useState(null)
    useEffect(()=>{
         getFetch();
    },[])

    const getFetch= async()=>{
         const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
            id)
         const json= await data.json() 
         setResInfo(json.data)


    }

    return resInfo;

}

export default useRestaurentInfo;