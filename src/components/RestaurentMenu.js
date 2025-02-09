import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router";
import useRestaurentInfo from "../custom_hooks/useRestaurentInfo";

const RestaurentMenu = () => {
    const newid = useParams();
    console.log(newid.resid);

    const resInfo = useRestaurentInfo(newid.resid);

    if (resInfo === null) {
        return <ShimmerUi />;
    }

    const { name, id, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    console.log({ costForTwoMessage });

    const disname = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;
    console.log(disname);

    if (!name || !id) {
        return <div className="text-center text-red-600 text-lg font-semibold">⚠️ Menu information is currently unavailable.</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
            <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
            <p className="text-gray-600 text-lg mt-2">{costForTwoMessage}</p>

            <h2 className="text-xl font-semibold mt-6 text-gray-700">Menu Items:</h2>
            <ul className="mt-4 space-y-2">
                {disname.map((res) => (
                    <li key={res?.card?.info.id} className="border-b py-2 text-gray-800">
                        {res?.card?.info.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurentMenu;




