import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { RES_API } from "../utils/constants";
import { SearchBar } from "./SearchBar";

export const Body = () => {

    // Local State Variable === Super Powerful Variable
    // Scope of this State Variable is inside the this Body component.
    const [ listOfRestaurants, setListOfRestaurants ] = useState([]);
    const [ filteredRestaurants, setFilteredRestaurants ] = useState([]);

    console.log("Body Rendered");

    const searchRestaurant = value => {
        const filteredRes = listOfRestaurants.filter(
            res => res?.info?.name?.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredRestaurants(filteredRes);
    };
    
    useEffect(() => {

        fetch(RES_API)
        .then(response => response.json())
        .then(value => {
            console.log(value);
            const result = value.data?.cards?.[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(result);
            setListOfRestaurants(result);
            setFilteredRestaurants(result);
        })
    }, []);

    // Conditional Rendering
    // if(listOfRestaurants.length === 0) {
    //     return <Shimmer />;
    // }

    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <SearchBar onSearch={searchRestaurant} />
                <button className="filter-btn"
            
                onClick={() => {
                    // Filter logic here
                    
                    const filteredList = listOfRestaurants.filter(
                        restaurant => restaurant.info?.avgRating > 4
                    );

                    setListOfRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
            {filteredRestaurants.map(restaurant => (<RestaurantCard 
            key={restaurant?.info?.id}
            
            resData={restaurant} />))}
           
            </div>
        </div>
    );
};
