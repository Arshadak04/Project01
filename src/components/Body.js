import ResCard from "./ResCard";
import Restaurants from "../common/data";

const Body =()=>{
    
    return (
        <div className="body">
          <div className="search-bar">
          <input type="text" placeholder="Enter your name"></input>
          </div>
          <div className="res-container">

    {Restaurants.map((restaurant) => (
      <ResCard key={restaurant.info.id} resList={restaurant} />
    ))}


          </div>

        </div>
    )
}

export default Body;