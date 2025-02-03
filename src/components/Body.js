import ResCard from "./ResCard";
import Restaurants from "../common/data";
import { useState } from "react";

const Body =()=>{


     const [Restaurant01 , setRestaurent01]= useState(
        Restaurants
     )


    
    return (
        <div className="body">
          <div className="search-bar">

          <input type="text" placeholder="Enter your name"></input>
          </div>
          <div className="filter">
                <button className="filter-button" onClick={()=>{
                       
                      FilterRestaurant01=Restaurant01.filter((res)=>{
                        return res.info.avgRating >= 4.3
                      }) 
                      
                      setRestaurent01(FilterRestaurant01)

                  console.log(FilterRestaurant01)
                }}
                

                >Top Restaurant</button>

            </div>
          <div className="res-container">

    {Restaurant01.map((restaurant) => (
      <ResCard key={restaurant.info.id} resList={restaurant} />
    ))}


          </div>

        </div>
    )
}

export default Body;