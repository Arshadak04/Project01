import { CDN_LINK } from "../common/link";

const ResCard = (props) => {
    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating
    } = props.resList.info;

    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4 w-64 hover:shadow-lg transition-shadow duration-300">
            <div className="res-card-image">
                <img
                    className="w-full h-40 object-cover rounded-md"
                    src={CDN_LINK + cloudinaryImageId}
                    alt="Restaurant Image"
                />
            </div>
            <h4 className="text-lg font-semibold mt-2 text-gray-800">{name}</h4>
            <div className="res-cuisines text-gray-600 text-sm mt-1">
                <p>{cuisines.join(", ")}</p>
            </div>
            <div className="res-rating mt-2">
                <h5 className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-semibold inline-block">
                    ⭐ {avgRating}
                </h5>
            </div>
        </div>
    );
};

export default ResCard;





    
