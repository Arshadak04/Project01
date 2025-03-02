import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router";
import useRestaurentInfo from "../custom_hooks/useRestaurentInfo";
import RestaurentMenuPart from "./RestaurentMenuPart";
import { useState } from "react";

const RestaurentMenu = () => {

  const [showindex,setshowindex]=useState(0)
    const newid = useParams();
    console.log(newid.resid);

    const resInfo = useRestaurentInfo(newid.resid);

    if (resInfo === null) {
        return <ShimmerUi />;
    }

    const { name, id, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    // console.log({ costForTwoMessage });

    const disname = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;
    const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const categoryfil=category.filter(c => c.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(category);
    // console.log(categoryfil);

    if (!name || !id) {
        return <div className="text-center text-red-600 text-lg font-semibold">⚠️ Menu information is currently unavailable.</div>;
    }

//     return (
//         <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
//             <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
//             <p className="text-gray-600 text-lg mt-2">{costForTwoMessage}</p>
//             {
//                 categoryfil.map(
//                     (category)=>{
//                         return <RestaurentMenuPart key={category.card.card.categoryId} data={category}/>
//                         // (
//                         //     console.log(category)
//                         // )
// }
//                 )
//             }   

//         </div>
//     );

return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
      <p className="text-gray-600 text-lg mt-2">{costForTwoMessage}</p>

      {categoryfil.map((category,index) => (
        <RestaurentMenuPart key={category.card.card.categoryId} data={category} accod={index===showindex && true} setshowindex={()=> setshowindex(index)} />
      ))}
    </div>
  );
};

export default RestaurentMenu;




