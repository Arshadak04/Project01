import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router";
import useRestaurentInfo from "../custom_hooks/useRestaurentInfo";

const RestaurentMenu = () => {


  
    const newid=useParams();
    console.log(newid.resid)

    const resInfo=useRestaurentInfo(newid.resid)
  
   

  if (resInfo === null) {
    return <ShimmerUi />;
  }



  const {name,id,costForTwoMessage}  = resInfo?.cards[2]?.card?.card?.info;
  console.log({costForTwoMessage})

  const disname  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;
  console.log(disname);


  // Optionally, handle the case where the expected data is not available
  if (!name || !id) {
    return <div>Menu information is currently unavailable.</div>;
  }

  return (
    <div>
      <h1>{name}</h1>
    
    
      
      <ul>


      {
        disname.map((res)=> <li key={res?.card?.info.id} > {res?.card?.info.name} </li> )
      }

    
      </ul>
    </div>
  );
};

export default RestaurentMenu;
