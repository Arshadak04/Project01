import { useState } from "react";
import RestaurentMenuPartItem from "./RestaurentMenuPartItem";


const RestaurentMenuPart=({data}) =>{

  const [accod, setAccod] = useState(false);

    const HandleClick=()=>{

       console.log("Hello Button Clicked")
      // setAccod(!accod);
      setAccod(!accod);


    };
    return (
        <div>
               {/* {Header of the } */}
              <div className="mt-4 space-y-2" onClick={HandleClick}>
                <span className="flex justify-between text-4xl  m-4">
                    <p>{data.card.card.title}</p>
                    <p>⬆️</p>
                    </span>
              
             {/* { console.log(data)}  */}
            </div> 

            <div>
           
            {data?.card?.card?.itemCards.map((category_item) => 
    accod && <RestaurentMenuPartItem key={category_item.card.info.id} item_data={category_item} />
)}
                
            </div>

        </div>
    )
}

export default RestaurentMenuPart;     
 