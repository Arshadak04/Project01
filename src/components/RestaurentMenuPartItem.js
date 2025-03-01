import { CDN_LINK } from "../common/link";

const RestaurentMenuPartItem=(data)=>{
    return (
        <div className="border-2 p-2 m-2">
            {/* {console.log(data)} */}
            <span className="flex">
                <img src={CDN_LINK+data.item_data.card.info.imageId} className="w-20"></img>
                <p className="text-2xl">{data.item_data.card.info.name}</p>
                <p className="text-2xl">{data.item_data.card.info.defaultPrice || data.item_data.card.info.price}</p>
                {/* <p>{data.item_data.card.info.category}</p> */}
                <p>{data.item_data.card.info.description}</p>


            </span>
            <h1>{data.item_data.card.info.name}</h1>
        </div>
    )
}

export default RestaurentMenuPartItem;  
