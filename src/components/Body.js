import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

export const Body = () => {

    // State Variable === Super Powerful Variable

    const arr = useState(resList);

    const listOfRestaurants = arr[0];

    const setListOfRestaurants = arr[1];

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <button className="filter-btn"
                
                onClick={() => {
                    // Filter logic here
                    
                    const filteredList = listOfRestaurants.filter(
                        restaurant => restaurant.info.avgRating > 4
                    );

                    setListOfRestaurants(filteredList);
        
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
            {listOfRestaurants.map(restaurant => (<RestaurantCard 
            key={restaurant.info.id}
            
            resData={restaurant} />))}
           
            </div>
        </div>
    );
}

export default Body;