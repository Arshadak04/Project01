import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    getMenuData();
  }, []);

  const newid=useParams();
  console.log(newid.resid)

  const getMenuData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + newid?.resid);
      const json = await data.json();
      // Log the response to inspect its structure
      console.log(json.data);
      console.log(json.data.cards[2]?.card?.card?.info.CostForTwoMessage)
      console.log(json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info.name)
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  if (resInfo === null) {
    return <ShimmerUi />;
  }

  // Safely access the nested data using optional chaining
//   const name = resInfo?.cards?.[2]?.card?.card?.info?.name;
//   const id = resInfo?.cards?.[2]?.card?.card?.info?.id;

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
      {/* <h2>{id}</h2> */}
      <h3>Arshad Qureshi</h3>
      
      {/* <h3>{costForTwoMessage}</h3> */}


      <ul>
{/*       
      <li>{disname[1]?.card?.info.name}</li>
      <li>{disname[2]?.card?.info.name}</li>
      <li>{disname[3]?.card?.info.name}</li>
      <li>{disname[4]?.card?.info.name}</li>
      <li>{disname[5]?.card?.info.name}</li> */}

      {
        disname.map((res)=> <li key={res?.card?.info.id} > {res?.card?.info.name} </li> )
      }

    
      </ul>
    </div>
  );
};

export default RestaurentMenu;
