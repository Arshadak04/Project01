import ResCard from "./ResCard";
import Restaurants from "../common/data";
import { useState } from "react";
import { useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router";
import useOnlineStatus from "../custom_hooks/useOnlineStatus";

const Body =()=>{


     const [Restaurant01 , setRestaurent01]= useState(
       []
     )

     const [FilteredRestaurent , setFilteredRestaurent]= useState(
      []
    )

     const [ResSearch, SetResSearch]=useState([""])
    
    // const [isOnline]=useOnlineStatus();

    // if (!isOnline) {
    //   return (
    //     <h1>User is Offline</h1>
    //   );
    // }
  

     useEffect(()=>{
       getData()
     },[])

     const getData= async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        

        const json=await data.json();
        // await console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setRestaurent01(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       
     }

     //Conditional Rendering

    //  if(Restaurant01.length===0){
    //     return 
    //  }
    
    
//      const onlineInfo=useOnlineStatus();

const OnlineStatus=useOnlineStatus();

if(OnlineStatus===false) return <h1> Please Check Your Internate Connection</h1>

    
    return Restaurant01.length===0?<ShimmerUi/>: (
        <div className="body">
          <div className="search-bar">

          <input className="search-input" type="text" placeholder="Enter your name" value={ResSearch}
            
            onChange={(e)=>{
              SetResSearch(e.target.value)
            }}

          ></input>
          <button className="search-button" 
          onClick={()=>{
            // console.log(ResSearch)
            const FilterRestaurant01=Restaurant01.filter((res)=>{
              return res.info.name.toLowerCase().includes(ResSearch.toLowerCase())

            })
            setFilteredRestaurent(FilterRestaurant01)
          }}
          >Search For Restaurant</button>
          </div>
          <div className="filter">
                <button className="filter-button" onClick={()=>{
                       
                     const FilterRestaurant01=Restaurant01.filter((res)=>{
                        return res.info.avgRating >= 4.2
                      }) 
                      
                      setFilteredRestaurent(FilterRestaurant01)

                  console.log(FilterRestaurant01)
                }}
                

                >Top Restaurant</button>

            </div>
          <div className="res-container">

    {FilteredRestaurent.map((restaurant) => (
      <Link key={restaurant.info.id} to={"/restaurents/"+restaurant.info.id}>
         <ResCard  resList={restaurant} /> 
      </Link>
      
 
      
    ))}


          </div>

        </div>
    )
}

export default Body;