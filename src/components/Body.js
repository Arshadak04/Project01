import ResCard from "./ResCard";
import Restaurants from "../common/data";
import { useState } from "react";
import { useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router";
import useOnlineStatus from "../custom_hooks/useOnlineStatus";

const Body = () => {
    const [Restaurant01, setRestaurent01] = useState([]);
    const [FilteredRestaurent, setFilteredRestaurent] = useState([]);
    const [ResSearch, SetResSearch] = useState([""]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestaurent01(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const OnlineStatus = useOnlineStatus();

    if (OnlineStatus === false)
        return <h1 className="text-center text-red-600 text-xl font-semibold"> ⚠️ Please Check Your Internet Connection</h1>;

    return Restaurant01.length === 0 ? (
        <ShimmerUi />
    ) : (
        <div className="body p-6">
            <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
                <div className="flex items-center gap-2">
                    <input
                        className="border border-orange-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        type="text"
                        placeholder="Restaurent"
                        value={ResSearch}
                        onChange={(e) => {
                            SetResSearch(e.target.value);
                        }}
                    ></input>
                    <button
                        className="bg-amber-400 px-4 py-2 rounded-md text-white font-semibold hover:bg-amber-500 transition"
                        onClick={() => {
                            const FilterRestaurant01 = Restaurant01.filter((res) => {
                                return res.info.name.toLowerCase().includes(ResSearch.toLowerCase());
                            });
                            setFilteredRestaurent(FilterRestaurant01);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="mx-4 px-4 py-2 bg-amber-500 text-white rounded-md font-semibold hover:bg-amber-600 transition"
                    onClick={() => {
                        const FilterRestaurant01 = Restaurant01.filter((res) => {
                            return res.info.avgRating >= 4.2;
                        });

                        setFilteredRestaurent(FilterRestaurant01);
                    }}
                >
                    Top Restaurant
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {FilteredRestaurent.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurents/" + restaurant.info.id} className="hover:scale-105 transition">
                        <ResCard resList={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;



